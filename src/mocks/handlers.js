import { rest } from "msw"

const baseURL = "https://drf-api-ed.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            "pk": 3,
            "username": "emilyo",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 3,
            "profile_image": "https://res.cloudinary.com/ejdiamo/image/upload/v1/media/images/black-and-white-city-hotel_uxmqhs"
        })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];