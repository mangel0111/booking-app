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

## Notes:

- Instead of CRA I used [ViteJs](https://vitejs.dev/), to take advantage of rollup and esBuild.
- There's not a router library, so the links in the header are not redirecting to anywhere.
- The structure of the project is based on type of file (pages, components, utilities).
- the website is fully responsive.
- The carrousel renders all the images to avoid the image loading delay, and to give a better UI experience.
- I install the library `react-swipeable` to handle the swap interactions in mobile.
- I decide to don't dedicate to much effort on the Calendar Picker from/to, because that could take more than 2 hours just that component.
