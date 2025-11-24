# Submission details for Jason Bell

Hi,

Before either running the dev server or creating a production bundle, please create a `.env.local` file and add your `API_KEY` from [Visual Crossing Weather API](https://www.visualcrossing.com/)

```bash
echo "API_KEY=<your_api_key>" > .env.local
```

## Questions & assumptions made during the task

These are questions / assumptions that in a non-tech test environment I would reach out or ask for clarifications around:

- 5 day Forecast start: Fri, 26 may that seems like "today" in the designs, and the 5 day Forecast shows "Tomorrow", "Sat, 27th May"...
  - We'll assume the 5 day forecast is the next 5 days
- Max temp \* 2 -> We make one of these Min temp, to match (what I'm assuming) is max and min temp in the 5 day forecast
- Other comment in the Figma on the white bar: I'm assuming that was there to cover the yellow bar, from a copied 67%-length to the 29% displayed
- Icons: 23 from the [Figma File](https://www.figma.com/design/FNdVsOUJA53CWMW9mnraYk/Weather-App?node-id=24-1131&t=HRyfXZzr6mChHOCj-0), with API returning (from [Visual Crossing icon docs](https://www.visualcrossing.com/resources/documentation/weather-api/defining-icon-set-in-the-weather-api/))

  - We use 16 with `icons2` option since `icons1` (9 slugs) doesn't have `showers-day` for Sun, 29 May
  - There are then missing returns from icons2 which we'll fill in with closest options, see `iconLookup.ts` file for details on decisions
  - Icon is used without its frame in the sidebar, we position it as we can, noting some taller icons may cause overlap

- How should we best parse the `conditions`?
  - The API `conditions` field is a list of descriptions - do we want the first? Do we want a priority order?
  - We'll go with the first of the fields, as it seems to be the most descriptive
- Line Height in Figma seems to be 43.5px in most places so we'll ignore it and focus on text placement
- Months in date format: which is better, `Sun, 23 Nov` or `Sun, 23 November`?
  - Shorter month makes for more consistent spacings so we'll go with that
- I would confirm the rules around the temperature units & rounding:
  - Is there a consistent rule for the grey colour?
  - I'm assuming rounding is to the nearest whole number for both Celsius and Fahrenheit
- Sunset / Sunrise rounding - several similar but possible options:
  - Slice off the seconds (we're going with this)
  - Rounding up/down consistently
  - Round towards daytime (round sunrise up, round sunset down)
  - Round towards nighttime (flipped)
- Design size and responsivity - the 1920 x 1080 is quite a large viewport, I tried to add some responsivity where possible
- Best icon for no data? I prefer showing one of the icons compared to none, so we go with a neutral-ish icon
- Loading state - right now, there's very little indication that the search has happened
  - I added a spinner while the fetch happens

# Archived Readme

![image 1](https://github.com/echo724/notion2md/assets/78376735/6b880ad1-3ff2-4cdd-8d06-ff708314772d)

### Objective

Using a NX monorepo, TypeScript, React and Next.js your task is to build a Weather App.

### Brief

Your assignment is to build a Weather App using the [Visual Crossing Weather API](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/). We are looking for a solution that is functionally complete, not pixel-perfect but should look as close [this design document](https://www.figma.com/file/FNdVsOUJA53CWMW9mnraYk/Weather-App?type=design&node-id=0%3A1&t=FPsFSmGIgDaH48F6-1) as possible.

Fork this branch and then design, organise, test, and document your code using the scenario of it being deployed to production and be used by a user base of 5,000 daily active users.

### Tasks

You have complete freedom over how and how long you want to spend to deliver the following requirements:

- On first load, the profile should show the weather for a specific place.
- Users can for the weather of a location from user input.
- Users can see relevant weather information based on their search.
- Handle the case of no data being available for a search.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/next?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Run tasks

To run the dev server for your app, use:

```sh
npx nx dev weather-app
```

To create a production bundle:

```sh
npx nx build weather-app
```

To see all available targets to run for a project, run:

```sh
npx nx show project weather-app
```
