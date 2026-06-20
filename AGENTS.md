# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before writing any code.

# Project component conventions

- Keep components small and focused. Put reusable UI in `src/components/<ComponentName>/`.
- Follow the existing folder pattern when creating components:
  - `index.tsx` for the component implementation.
  - `style.ts` or `styles.ts` for `StyleSheet` styles, matching the naming already used nearby.
  - `type.ts` only when props/types are shared or large enough to justify a separate file.
- Prefer typed props with clear names. Avoid passing generic `ReactNode` when the component expects a specific kind of content, such as an image.
- For images in React Native, type props as `ImageSourcePropType` from `react-native`.
- Prefer real food images over decorative icons for food/category UI. Use local files in `assets/` with `require(...)` when available.
- If a real image asset does not exist yet, a temporary remote image URL is acceptable, but prefer replacing it with a local asset later for reliability.
- Keep visual assets close to the app theme: real food photos, clear crops, and readable layouts. Avoid purely decorative placeholders when the user needs to recognize the item.
- For circular thumbnails, use a fixed-size container with `borderRadius` and `overflow: "hidden"`, then render an `Image` at `width: "100%"` and `height: "100%"` with `resizeMode="cover"`.
- Remove unused imports immediately after changing a component, especially old icon imports.
- After code changes, run TypeScript validation with:

```bash
npm exec tsc -- --noEmit
```

# Home category cards

- `HomeScreen` renders category data from `src/constants/categories.ts`.
- `CategoryCard` should receive `title` and `image`, not icon nodes.
- Category images should represent the actual food category whenever possible.
