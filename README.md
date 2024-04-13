# SYan

TODO

## 目录结构

```
Project Files/
├── apps/
│   ├── desktop/                     # Electron App
│   ├── mobile/                      # React Native App
│   ├── chrome-extension/            # Chrome Extension
│   ├── vscode-extension/            # VSCode Extension
│   ├── landing-page/
│   └── llm-server/
├── common/
│   └── profiles/
│       ├── tsconfig.*.json
│       └── typedoc.json
├── packages/
│   ├── core/
│   │   ├── constants/
│   │   └── protocol/
│   └── electron/
├── sdk/
│   └── client-js/
├── package.json
└── README.md
```

## 软件架构

![Software Architecture](./media/software-architecture.png)

## 本地开发

```bash
# 安装依赖
$ pnpm install

# 监听并构建依赖包
$ pnpm watch

# 启动 Electron 桌面开发
$ pnpm dev:desktop

# 启动 Chrome 拓展开发
$ pnpm dev:crx
```

## License

MIT
