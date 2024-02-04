import express, { Request, Response } from 'express'
const PORT = 8000

const app = express()

app.get("/api/healthChecker", (req: Request, res: Response) => {
    res.status(200).json({
      status: "success",
      message: "Implement Google OAuth2 in Node.js",
    });
  });


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))