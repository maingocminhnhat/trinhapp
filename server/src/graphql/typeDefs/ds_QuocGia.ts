import { gql } from "apollo-server-express";


const quocGiaDefs = gql`
  type QuocGia {
    id: ID
    tenQuocGia: String
    tenDayDu: String
    name: String
    fullName: String
    dien_tich: String
  }

  type Query {
    ds_quocGia: [QuocGia]
  }
`

export { quocGiaDefs }
