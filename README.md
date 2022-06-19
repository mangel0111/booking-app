# Booking App

## Frameworks/Libraries used:

- React
- ViteJs
- StyledComponents
- react-icons

## How to start it?

```
npm install
npm run dev
```

or

```
yarn
yarn run dev
```

## Notes (1st iteration):

- Instead of CRA I used [ViteJs](https://vitejs.dev/), to take advantage of rollup and esBuild.
- There's not a router library, so the links in the header are not redirecting anywhere.
- The structure of the project is based on the type of file (pages, components, utilities).
- the website is fully responsive.
- The carousel renders all the images to avoid the image loading delay, but only the first the image is rendered and to give a better UI experience.
- I create a component named `Details`, where the request to the API with the pictures was made, to keep it simpler and to avoid a state library like redux the request is being made in an `useEffect`.
- I installed the library `react-swipeable` to handle the swap interactions on mobile.
- The unit tests are covering the most important features.
- I decided to not dedicate too much effort to the Calendar Picker from/to, because that could take more than 2 hours just that component.

## Notes (2nd iteration)

- To be accesible, I included labels for the inputs, aria tags for the buttons, alts props for the images, and change some element of the html were updated to be compliant with a11y and semantic.
- To pass the contrast test some colors were updated.
- SEO also was improved adding robots.txt, sitemap.xml and the manifest.json.
- The fonts and the size were improved to avoid harcoded values.
- To improve the performance of the images the src props was change to srcSet.
- Changes were made to some of the styling components to improve their responsive behavior.
- The hardcoded padding, margins, and radius were removed and now it's taken from the theme, using a Tailwind approach of defining spacing and radius instead.
