import fs from "fs"
import path from "path"
import {v4 as uuid} from "uuid"

const file = path.join(process.cwd(),"data","persones.json")

export default function handler(req,res){

  const data = JSON.parse(fs.readFileSync(file))

  if(req.method === "GET"){
    res.json(data)
  }

  if(req.method === "POST"){

    const nova = {
      id:uuid(),
      ...req.body
    }

    data.push(nova)

    fs.writeFileSync(file,JSON.stringify(data,null,2))

    res.json(nova)

  }

}
