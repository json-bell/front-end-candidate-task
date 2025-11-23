# Submission details for Jason Bell

Please create a `.env.local` file amd add your `API_KEY` from [Visual Crossing Weather API](https://www.visualcrossing.com/)

```bash
echo "API_KEY=<your_api_key>" > .env.local
```

## Questions

These are questions / assumptions that in a non-tech test environment I would reach out or ask for clarifications around:

- Extra icons - the API returns 9 possible icons, the Figma only shows 4 specific versions
  - We'll just reuse the ones that are available for now, with extension of finding some better ones
- How to parse the conditions?
  - Since the `conditions` API field seems to be a set of joint descriptors - do we want the first? Do we want a priority order?
  - We'll go with the last of the fields, as it seems to be the most descriptive from the data I've seen so far
- Line Height in Figma seems to be 43.5 in most places, we'll ignore it
- Would confirm rules around the degree symbols and rounding
  - Is there a consistent rule for the grey colour?
  - Assuming rounding is to the nearest whole number for both Celsius and Fahrenheit
- Sunset / Sunrise rounding
  - Here we'll just slice the seconds off, but I can imagine preferences towards rounding up/down, or direction depending on if it's rise/set

# Original Readme

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
