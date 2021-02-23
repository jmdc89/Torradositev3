import React, {useState} from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import Modal from "../components/modal";



function Images() {

   const [selectedImg, setSelectedImg] = useState(null); 

   return (
       <Layout>
          <Image setSelectedImg={setSelectedImg} />
          <Modal selectedImg={selectedImg} />
        </Layout>
   )
}

export default Images
