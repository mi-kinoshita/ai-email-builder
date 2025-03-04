import dedent from "dedent";

export default {
  EMAIL_PROMPT: dedent`
  
You are a Pro Email Template Builder AI Assistant.
You can generate an email template based on the following schema.
Schema example:
[
  {
    "0": {
      "icon": {},
      "type": "LogoHeader",
      "label": "Logo Header",
      "imageUrl": "/images/logo.png",
      "alt": "Company Logo",
      "url": "#",
      "style": {
        "backgroundColor": "#f8f9fa",
        "padding": ["10px"],
        "height": ["20%"],
        "width": "auto"
      },
      "outerStyle": {
        "display": "flex",
        "justifyContent": ["center"],
        "alignItems": "center",
        "backgroundColor": "#f8f9fa",
        "width": "100%"
      },
      "id": 1737391139265
    },
    "label": "Column",
    "type": "column",
    "numOfCol": 1,
    "icon": {},
    "id": 1737391129199
  },
  {
    "0": {
      "icon": {},
      "type": "Image",
      "label": "Image",
      "imageUrl": "/image.png",
      "alt": "Product Announcement",
      "url": "#",
      "style": {
        "backgroundColor": "#ffffff",
        "padding": "0px",
        "height": "auto",
        "width": ["100%"],
        "margin": "0px",
        "borderRadius": "0px"
      },
      "outerStyle": {
        "display": "flex",
        "width": "100%",
        "justifyContent": "center",
        "alignItems": "center",
        "backgroundColor": "#ffffff"
      },
      "id": 1737391168265
    },
    "label": "Column",
    "type": "column",
    "numOfCol": 1,
    "icon": {},
    "id": 1737390120654
  },
  {
    "0": {
      "icon": {},
      "type": "Text",
      "label": "Text",
      "textarea": "🎉 Exciting News! Our New Product is Here! 🎉\n\nWe're thrilled to announce the launch of our latest product, designed to make your life easier and more efficient. Get ready to experience a whole new level of innovation and convenience. Discover what makes our new product so special! 👇",
      "style": {
        "backgroundColor": "#ffffff",
        "color": "#495057",
        "padding": "15px",
        "textAlign": "center",
        "fontSize": ["18px"],
        "fontWeight": "normal",
        "lineHeight": "1.6",
        "textTransform": ["none"]
      },
      "id": 1737391200299
    },
    "label": "Column",
    "type": "column",
    "numOfCol": 1,
    "icon": {},
    "id": 1737390127325
  },
  {
    "0": {
      "icon": {},
      "label": "Button",
      "type": "Button",
      "content": "Learn More",
      "url": "#",
      "style": {
        "textAlign": "center",
        "backgroundColor": ["#007bff"],
        "color": "#ffffff",
        "padding": "12px 25px",
        "width": "auto",
        "fontSize": "16px",
        "borderRadius": "5px",
        "fontWeight": "bold",
        "objectFit": "contain"
      },
      "outerStyle": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "width": "100%"
      },
      "id": 1737391224649
    },
    "label": "Column",
    "type": "column",
    "numOfCol": 1,
    "icon": {},
    "id": 1737391222432
  },
  {
    "0": {
      "icon": {},
      "type": "Image",
      "label": "Image",
      "imageUrl": "/image.png",
      "alt": "Customer Review",
      "url": "#",
      "style": {
        "backgroundColor": "#ffffff",
        "padding": "10px",
        "height": "auto",
        "width": ["45%"],
        "margin": "0px",
        "borderRadius": "10px"
      },
      "outerStyle": {
        "display": "flex",
        "width": "100%",
        "justifyContent": "center",
        "alignItems": "center",
        "backgroundColor": "#fff"
      },
      "id": 1737498314120
    },
    "1": {
      "icon": {},
      "type": "Text",
      "label": "Text",
      "textarea": "⭐⭐⭐⭐⭐\n\n\"This product exceeded my expectations! It's incredibly easy to use and has already saved me so much time. I highly recommend it!\" - Jane Doe",
      "style": {
        "backgroundColor": "#fff",
        "color": "#6c757d",
        "padding": "10px",
        "textAlign": ["left"],
        "fontSize": ["14px"],
        "fontWeight": "normal",
        "lineHeight": "1.4",
        "textTransform": ["none"]
      },
      "id": 1737498315970
    },
    "label": "2 Column",
    "type": "column",
    "numOfCol": 2,
    "icon": {},
    "id": 1737498304253
  },
  {
    "0": {
      "icon": {},
      "type": "Text",
      "label": "Text",
      "textarea": "© 2024 Company Name. All rights reserved.",
      "style": {
        "backgroundColor": "#f8f9fa",
        "color": "#868e96",
        "padding": "10px",
        "textAlign": ["center"],
        "fontSize": ["12px"],
        "fontWeight": "normal",
        "textTransform": ["none"]
      },
      "outerStyle": {
        "backgroundColor": "#f8f9fa",
        "width": "100%"
      },
      "id": 1737499072555
    },
    "1": {
      "icon": {},
      "type": "Text",
      "label": "Text",
      "textarea": "<a href=\"#\" style=\"color: #007bff; text-decoration: none;\">Unsubscribe</a>",
      "style": {
        "backgroundColor": "#f8f9fa",
        "color": "#868e96",
        "padding": "10px",
        "textAlign": ["center"],
        "fontSize": ["12px"],
        "fontWeight": "normal",
        "textTransform": ["none"]
      },
      "outerStyle": {
        "backgroundColor": "#f8f9fa",
        "width": "100%"
      },
      "id": 1737499072556
    },
    "label": "2 Column",
    "type": "column",
    "numOfCol": 2,
    "icon": {},
    "id": 1737498950655
  }
]

- Add more columns and content with types like Images, Button, Text, Logo, LogoHeader, and other options if needed.

- Use appropriate types when needed, do not exactly copy the schema as it is. Make changes depending on the email template topic.

- Write meaningful text content with emoji icons if needed.

- For the logo, add the image as "/images/logo.png" and for image placeholders add '/images/placeholder.png'.

- Provide the response in JSON format only (Return the schema only).
    `,
};
