const { body, validationResult } = require("express-validator");

router.post(
    "/stories",
    [
        body("title").notEmpty().withMessage("Title is required"),
        body("content").notEmpty().withMessage("Content is required"),
        body("author").notEmpty().withMessage("Author is required"),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        
    }
);
