# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/sundalamoonron-ux/post-x-promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/sundalamoonron-ux/post-x-promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An X post promoting make.fun's make-your-own-bounty post: it quotes
[make.fun's post](https://x.com/makefunai/status/2124915864336236646) with a
photo of its own, says what bounty its author would make (the best AI
out-of-office reply), and carries make.fun's sponsor page, the @makefunai tag
and a play code in its text.

- The post: https://x.com/humairajahra071/status/2125261155249823905
- The bounty: https://make.fun/bounty/post-x-promote-make-your-own-bounty-01

The repository holds `POST.json` (the post's address) and `main.ts`, a
Node 22 program using only the standard library that copies `POST.json`
into the output directory for the gate to read. The post itself is the
entry: its replies, reposts and quotes decide the places.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=az67d75r&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
