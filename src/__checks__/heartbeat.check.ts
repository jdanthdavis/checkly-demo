import { HeartbeatMonitor } from 'checkly/constructs'

new HeartbeatMonitor('astronomy-heartbeat', {
  name: 'Astronomy heartbeat API',
  activated: true,
  period: 1,
  periodUnit: 'minutes',
  grace: 5,
  graceUnit: 'minutes',
})
