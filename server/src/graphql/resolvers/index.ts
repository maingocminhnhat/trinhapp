import { bookResolvers } from "./books";
import { quocGiaResolves } from "./ds_quocGia";
import { usersResolves } from "./users";

export default [
  usersResolves,
  quocGiaResolves,
  bookResolvers
]
