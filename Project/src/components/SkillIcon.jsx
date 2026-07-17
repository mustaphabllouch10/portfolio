import {
  Code2,
  Container,
  Cpu,
  Database,
  GitBranch,
  GitFork,
  Palette,
  Send,
  Server,
  Sparkles,
  Terminal,
  TerminalSquare,
  Zap,
} from 'lucide-react'

const ReactIcon = (props) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6.5 8.5c-2.3 1.6-3.7 4.2-3.7 6.5 0 3.1 2.5 5.6 5.6 5.6 1.7 0 3.2-.8 4.2-2.1" />
    <path d="M17.5 15.5c2.3-1.6 3.7-4.2 3.7-6.5 0-3.1-2.5-5.6-5.6-5.6-1.7 0-3.2.8-4.2 2.1" />
    <path d="M8 12c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4Z" />
  </svg>
)

const JavaScriptIcon = (props) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" {...props}>
    <path d="M3 3h18v18H3z" opacity="0.12" />
    <path d="M12 8.5c-1.4 0-2.5.7-3.2 1.9-.2.4-.1.9.2 1.2.3.3.8.4 1.1-.1.3-.5.8-.8 1.4-.8 1 0 1.7.7 1.7 1.6 0 .8-.5 1.4-1.4 1.8-1.1.5-1.4 1.3-1.4 2.2h2c0-.4.2-.7.6-.9.5-.2 1.1-.5 1.5-.9.9-.9 1.3-2 1.3-3.2 0-2.1-1.4-3.5-3.7-3.5Zm-4.8 5.8c0 1.4.7 2.6 2 3.2.2.1.4.2.6.2-.1-.3-.2-.5-.2-.8 0-.5.2-.9.5-1.2.4-.3.8-.4 1.2-.4.4 0 .8.1 1.2.3.5.3.8.8.8 1.3 0 .8-.3 1.4-.9 1.9-.7.6-1.8 1-3 1-2.1 0-3.6-1.4-3.6-3.4 0-.7.2-1.4.6-2 .4-.6.9-1.1 1.6-1.3-.1.2-.2.5-.2.8Z" />
  </svg>
)

const CloudIcon = (props) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 18a4 4 0 1 1 .2-8 5.5 5.5 0 1 1 10.6 1.2A3.5 3.5 0 1 1 17.5 18H7Z" />
  </svg>
)

const iconMap = {
  react: ReactIcon,
  javascript: JavaScriptIcon,
  code2: Code2,
  palette: Palette,
  sparkles: Sparkles,
  server: Server,
  database: Database,
  cpu: Cpu,
  zap: Zap,
  gitbranch: GitBranch,
  gitBranch: GitBranch,
  github: GitFork,
  terminalsquare: TerminalSquare,
  terminalSquare: TerminalSquare,
  send: Send,
  container: Container,
  terminal: Terminal,
  cloud: CloudIcon,
  '⚛️': ReactIcon,
  '📜': JavaScriptIcon,
  '🪄': Sparkles,
  '🧱': Server,
  '🐘': Database,
  '🗄️': Database,
  '🧰': GitBranch,
  '🐳': Container,
}

const SkillIcon = ({ icon, className = 'h-4 w-4' }) => {
  const key = typeof icon === 'string' ? icon.toLowerCase() : ''
  const IconComponent = iconMap[key] || Code2

  return <IconComponent className={className} />
}

export default SkillIcon
