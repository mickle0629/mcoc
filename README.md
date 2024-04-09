This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Table of Contents
- [Table of Contents](#table-of-contents)
- [Team](#team)
- [Project Goal](#project-goal)
- [Getting Started](#getting-started)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup \[Skip if not doing DB\]](#backend-setup-skip-if-not-doing-db)
- [Learn More](#learn-more)

## Team
This project is part of Whitworth University's Spring 2024 CS-472 Software Engineering. Its team includes:
- An Dang - adang24@my.whitworth.edu - Frontend and Backend engineer.
- Tricia Cebotari - pcebotari24@my.whitworth.edu - Frontend Engineer.
- Irene Racharla - iracharla24@my.whitworth.edu - Frontend Engineer.
- Seth Miller - sethmiller24@my.whitworth.edu - Frontend Engineer.
- Daniel Stokes - dstokes24@my.whitworth.edu - Backend Engineer.

## Project Goal
This project supports data gathering and processing for [Mission Community Outreach Center](https://www.4mission.org/)'s annual [School Shoes for Kids 2024 event](https://www.youtube.com/watch?v=je8RKQ9i4GE&t=1s).

It is specifically a website that allows parents of low-income companies to place orders for shoes that will be worn by their children. After placing an order. they will arrive to a venue with the receipt to receive their shoes.

This system exists to replace a previous sytem that involved significant manual labor and a less-than-ideal JotForm for entering information.

## Getting Started
### Frontend Setup
This front-end runs off of the React framework Next.js. Installation is as follows:
- Install [Node.js](https://nodejs.org/en). Next.js depends on Node.js
- Install React and Next.js:
    ```bash
    npm install react@latest react-dom@latest next@latest
    ```
After cloning, install the dependencies:
```bash
npm install
```

### Backend Setup [Skip if not doing DB]
In order to interact with the PostgreSQL database, download Vercel's PostgreSQL SDK:
```bash
npm i @vercel/postgres
```
The database is ran on Vercel, under the Hobby tier at this time. We use the VSCode extention [SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools) to write queries to interact with the database. Install it as well as the corresponding [PostgreSQL drivers](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-pg).

We use SQLTools because the hobby tier only allows one account to interact with the database at this time, so by setting up an access point on VSCode, devs can run and test queries without having to DM An Dang on Discord.

When setting up the database connection with SQLTools:
- Grab the database host, database name, username, and password from the Discord channel, in the pinned message.
- Enter the host, database name, and username into the corresponding fields in the SQLTools connection setup window.
- Enable SSL verification
- Test the connection with the button, bottom right.

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

This project uses [Formik](https://formik.org/) and [Yup](https://github.com/jquense/yup) to handle forms and input validation.



