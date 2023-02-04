import React from 'react'


import Card from 'react-bootstrap/Card';


const Project = () => {
  return (


    <div>
    <Card className="bg-dark text-white">
      <Card.Img src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
           alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title><h1>WELCOME TO PROFILE PAGE</h1></Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text><h3>Thank you</h3></Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>




  )
}

export default Project