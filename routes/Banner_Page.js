const router = express.Router();
const {
    getBanner_Pages,
 
  } = require("./controller/banner");
router.route("/").get(getBanner_Pages);