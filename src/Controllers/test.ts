import { Request, Response } from "express";

class DummyController {
    public static getDummyData(req: Request, res: Response): void {
        try {
            // Your logic to fetch dummy data goes here
            const dummyData = {
                message: "This is a dummy response",
                timestamp: new Date().toISOString(),
            };

            res.status(200).json(dummyData);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

export default DummyController;
