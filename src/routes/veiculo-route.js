import { Router } from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
} from "../controllers/veiculo-controller.js";

const router = Router();

router.post("/", store);
router.get("/", index);
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
