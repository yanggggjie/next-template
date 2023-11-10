const fs = require('fs')
const path = require('path')

// 读取.env文件
const envPath = path.join(__dirname, '.env')
const envFileContent = fs.readFileSync(envPath, 'utf8')

// 解析变量
const variables = envFileContent.split('\n').reduce((acc, line) => {
  const match = line.match(/^(\w+)=(.*)$/)
  if (match) {
    acc.push(match[1]) // 只获取键名
  }
  return acc
}, [])

// 生成 TypeScript 声明内容
const tsDeclarationContent = `// environment.d.ts
declare namespace NodeJS {
  export interface ProcessEnv {
${variables
  .map((variable) => {
    return `    readonly ${variable}: string;`
  })
  .join('\n')}
    // 其他环境变量...
  }
}
`

// 写入文件
const tsDeclarationPath = path.join(__dirname, 'environment.d.ts')
fs.writeFileSync(tsDeclarationPath, tsDeclarationContent, 'utf8')
