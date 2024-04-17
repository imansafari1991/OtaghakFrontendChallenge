This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Otaghak code challenge

#### Build a simple web app using Nextjs (TypeScript) and Tailwind, following this [design](https://www.figma.com/file/4Hg0SjoCHcjQ7Yxa6muIzz/Otaghak-Code-Challenge?type=design&node-id=0%3A1&mode=design&t=wN9QNYn7K0miAvXa-1), which allows the user to click the cards to see a product detail

 Please create a branch of master branch in your name [ like yourName/feat/commitName ] and after completing the project, push your branch and make a pull request into master. 
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


##  Requirements
•	Create page at /city/[CityName] route

•	Use this api for list data

  Use CityName in Api filter for different cities result
```js
 baseURL: 'https://develop.core.otaghak.com/',
    method: 'post',
    url: 'odata/Otaghak/RoomsSearch/SearchRooms()',
    data: {
      checkIn: null,
      checkOut: null,
      attributes: [],
      rules: [],
      filter: "cityCode eq ' CityName ' and includeAroundLocations eq true&$top=24&$skip=0&$count=true",
    }
```


Use result id for create card links for example : /room/{id}

•	Your solution must follow the design as close as possible

•	Do not use any scaffolding tool, application boilerplate or seed project

•	Use a CSS Module

•	The site must work fine with the latest version of Chrome, Firefox, Safari, Microsoft Edge

•	Include a README file in which you explain your solution

### Additional instructions
•	Write tests for you code

•	Use of design patterns would be a plus

•	Add anything else that could make us say wow!


