# Muse Spark

Muse Spark is an AI studio for prompt capture, remixing, and launch-ready creative workflows.

## Local development

```bash
pnpm install
pnpm dev
```

## Verification

```bash
pnpm lint
pnpm build
pnpm test:e2e
```

## Deploy mapping

- GitHub repository: `gateszhangc/muse-spark`
- Git branch: `main`
- Image repository: `registry.144.91.77.245.sslip.io/muse-spark`
- K8s manifest path: `deploy/k8s/overlays/prod`
- Argo CD application: `muse-spark`
- Primary domain: `muse-spark.lol`

Release path:

`gateszhangc/muse-spark -> main -> registry.144.91.77.245.sslip.io/muse-spark -> deploy/k8s/overlays/prod -> muse-spark`
