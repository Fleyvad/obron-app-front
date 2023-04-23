import { rest } from 'msw';

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;
      if (email === 'email@test.com') {
        return res(
          ctx.status(201),
          ctx.json({
            msg: 'You are logged in!',
          }),
        );
      }

      return res(ctx.status(500), ctx.json({ msg: 'Error while logging in' }));
    },
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/projects`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          projects: [
            {
              _id: 'mockId2',
              projectName: 'Name',
              date: 0,
              description: '',
              resources: {
                date: 0,
                enterprise: '',
                worker: '',
                hours: 0,
                tools: '',
                vehicles: '',
              },
              incidences: '',
              imgUrl: '',
            },
          ],
        }),
      );
    },
  ),
];

export const errorHandlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/projects`,
    (_req, res, ctx) => {
      return res.once(ctx.status(401), ctx.json({ msg: 'Unauthorized' }));
    },
  ),
  // rest.get(
  //   `${process.env.REACT_APP_API_URL}/api/v1/projects`,

  //   (_req, res, ctx) => {
  //     return res.once(ctx.status(500), ctx.json(null));
  //   },
  // ),
];
