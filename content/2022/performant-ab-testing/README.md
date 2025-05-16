---
title: 'Performant Experimentation at Scale'
category: 'next.js'
---

Previewing performant Experimentation using Next.js and Edge Middleware, and discussing why you might consider using a data-driven experimentation strategy in the first place.

Highlights:

- A/B testing is helpful for weighing out the potential impact of a potentially risky change to a high-impact funnel
- All product engineering teams should consider prioritizing experimentation to better understand the impact changes to your product has on the end user. Data-driven choices are stickier
- High-impact funnels are defined as: Critical flows in your application that broadly impact user experience, like Sign Up or Sign In
- Middleware can be used to bucket your users, or you can outsource audience determination to a provider like [Statsig](https://www.statsig.com/) or [Launch Darkly](https://launchdarkly.com/)
- The key to performant experiementation is a flags provider that does not increase initial page load latency during audience determination

---

## Seen At

**[Next.js Conf](https://nextjs.org/conf)** on October 25th, 2022

- [🎥 Recorded presentation](https://www.youtube.com/watch?v=c_wYt7ur2yc)
