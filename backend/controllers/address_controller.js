import user_address from "../model/address_model.js";
import User from "../model/auth_model.js";

// Create Controller
const createAddress = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      address,
      city,
      street_number,
      country,
      number,
      zip_code,
    } = req.body;

    // If user exist or not
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        status_code: 400,
      });
    }

    const isAddressExist = await user_address.findOne({
      street_number,
      address,
    });

    if (isAddressExist) {
      return res.status(400).json({
        message: "Address already exists",
        status_code: 400,
      });
    }

    // // Create address
    const createUserAddress = await user_address.create({
      userId: req.user._id.toString(),
      firstName,
      lastName,
      address,
      city,
      street_number,
      country,
      number,
      zip_code,
    });

    return res.status(200).json({
      message: "Address created successfully",
      data: createUserAddress,
      status_code: 200,
    });
  } catch (error) {
    console.log("Error in backend while creating user address", error);
    return res.status(500).json({
      message: "Internal Server Error",
      status_code: 500,
    });
  }
};

// Update Controller
const updateAddress = async (req, res) => {
  try {
    const { id } = req.query;
    const {
      firstName,
      lastName,
      address,
      city,
      street_number,
      country,
      number,
      zip_code,
    } = req.body;

    // Check if the address already exists
    const isAddressExist = await user_address.findOne({
      street_number,
      address,
    });

    if (isAddressExist) {
      return res.status(400).json({
        message: "Address already exists",
        status_code: 400,
      });
    }

    // Update address
    const updateAddress = await user_address.updateOne(
      { _id: id },
      {
        $set: {
          firstName,
          lastName,
          address,
          city,
          street_number,
          country,
          number,
          zip_code,
        },
      }
    );

    const { acknowledged, modifiedCount } = updateAddress;

    return res.status(200).json({
      message: "Address updated successfully",
      data: { acknowledged, modifiedCount },
      status_code: 200,
    });
  } catch (error) {
    console.log("Error in backend while updating user address", error);
    return res.status(500).json({
      message: "Internal Server Error",
      status_code: 500,
    });
  }
};

//  Delete Controller
const deleteAddress = async (req, res) => {
  try {
    const { id } = req.query;

    const deleteAddress = await user_address.deleteOne({ _id: id });

    return res
      .status(200)
      .json({ message: "Address deleted success fully", data: deleteAddress });
  } catch (error) {
    console.log("Error in backend while deleting user address", error);
    return res.status(500).json({
      message: "Internal Server Error",
      status_code: 500,
    });
  }
};

// Get all address controller
const getAddress = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
    const search = req.query.search || ""; // Default to no search

    // Calculate the number of items to skip
    const skip = (page - 1) * limit;

    // Build search query
    const searchQuery = {
      $or: [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { address: { $regex: search, $options: "i" } },
        { city: { $regex: search, $options: "i" } },
      ],
    };

    // Retrieve data with pagination and search
    const getData = await user_address
      .find(searchQuery)
      .skip(skip)
      .limit(limit);
    const totalCount = await user_address.countDocuments(searchQuery); // Get the total number of matching documents

    res.status(200).json({
      message: "Addresses retrieved successfully",
      data: getData,
      pagination: {
        page,
        limit,
        totalCount,
      },
    });
  } catch (error) {
    console.log("Error in backend while retrieving user address", error);
    return res.status(500).json({
      message: "Internal Server Error",
      status_code: 500,
    });
  }
};

export { createAddress, updateAddress, deleteAddress, getAddress };
