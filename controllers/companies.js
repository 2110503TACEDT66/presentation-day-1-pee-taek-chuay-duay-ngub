const Company = require("../models/Company");

exports.getCompanies = async (req, res, next) => {
    try {
        const companies = await Company.find();
        res.status(200).json({ success: true, count: companies.length, data: companies });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

exports.getCompany = async (req, res, next) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: company });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

exports.createCompany = async (req, res, next) => {
    const company = await Company.create(req.body);
    res.status(201).json({
        success: true,
        data: company
    });
};

exports.updateCompany = async (req, res, next) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!company) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: company });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

exports.deleteCompany = async (req, res, next) => {
    try {
        const company = await Company.findById(req.params.id);

        if (!company) {
            return res.status(404).json({ success: false })
        }
        await Company.deleteOne();
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};
