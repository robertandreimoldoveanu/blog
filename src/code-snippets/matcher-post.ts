export const Fig1 = `
RouterModule.forRoot([
  matcher: (segments: UrlSegment[]) => {
    if (segments.length === 1 && segments[0].path === 'location') {
      return { consumed: segments };
    }
  }
])
`;

export const Fig2 = `
matcher: (segments: UrlSegment[]) => {
  if (
    segments.length !== 2
    || segments[0].path !== 'location'
    || !/^\w+$/gm.test(segments[1].path)
  ) {
    return null;
  }

  return {
    consumed: segments,
    posParams: {
      locationId: segments[1]
    }
  }
}
`;

export const Fig3 = `
RouterModule.forRoot([
  {
    path: 'location',
    component: MyComponent,
  },
  {
    path: 'location/:disk',
    component: MyComponent,
  },
  {
    path: 'location/:disk/:folder',
    component: MyComponent,
  },
  {
    path: 'location/:disk/:folder/:file',
    component: MyComponent,
  }
])
`;

export const Fig4 = `
matcher: (segments: UrlSegment[]) => {
  if (
    segments[0]?.path !== 'location'
    || segments.length > 4
    || !validateLocationSegments(segments)
  ) {
    return null;
  }

  return {
    consumed: segments,
    posParams: extractparams(...segments.slice(1,4))
  };
}
`;


