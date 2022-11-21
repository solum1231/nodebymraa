exports.getBanner_Pages = async (req, res, next) => {
    try {
      const Banner_pages = await Home_Page.find();
      res.status(200).json({
        success: true,
        data: banner_pages,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err,
      });
    }
  };