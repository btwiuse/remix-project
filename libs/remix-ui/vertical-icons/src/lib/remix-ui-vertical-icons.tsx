/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  Fragment,
  useEffect,
  useRef
} from 'react'
import { VerticalIcons } from '../../types/vertical-icons'
import * as packageJson from '../../../../../package.json'
import Home from './components/Home'
import Icon from './components/Icon'
import './remix-ui-vertical-icons.css'
import Settings from './components/Settings'
import OtherIcons from './components/OtherIcon'
export interface RemixUiVerticalIconsProps {
  verticalIconsPlugin: VerticalIcons
}

export const profile = {
  name: 'menuicons',
  displayName: 'Vertical Icons',
  description: '',
  version: packageJson.version,
  methods: ['select']
}

const defaultIcons = ['fileexplorer', 'filePanel',
  'compiler',
  'solidity',
  'udapp',
  'testing',
  'analysis',
  'solidityStaticAnalysis',
  'debugging',
  'debugger',
  'settings',
  'none']

export function RemixUiVerticalIcons ({
  verticalIconsPlugin
}: RemixUiVerticalIconsProps) {
  const scrollableRef = useRef(null)
  const iconPanelRef = useRef(null)

  function onThemeChanged (themeType: any) {
    const invert = themeType === 'dark' ? 1 : 0
    const active = iconPanelRef.current.querySelector('.active')
    if (active) {
      const image = iconPanelRef.current.querySelector('.remixui_image')
      image.style.setProperty('filter', `invert(${invert})`)
    }
  }

  function removeActive () {
    const images = iconPanelRef.current.querySelectorAll('.image')
    images.forEach(function (im) {
      im.style.setProperty('filter', 'invert(0.5)')
    })

    // remove active
    const currentActive = iconPanelRef.current.querySelector('.active')
    if (currentActive) {
      currentActive.classList.remove('active')
    }
  }

  function addActive (name: string) {
    if (name === 'home') return
    const themeType = verticalIconsPlugin.registry.get('themeModule').api.currentTheme().quality
    const invert = themeType === 'dark' ? 1 : 0
    const brightness = themeType === 'dark' ? '150' : '0' // should be >100 for icons with color
    const nextActive = iconPanelRef.current.querySelector(`[plugin="${name}"]`)
    if (nextActive) {
      const image = nextActive.querySelector('.remixui_image')
      nextActive.classList.add('active')
      image.style.setProperty('filter', `invert(${invert}) grayscale(1) brightness(${brightness}%)`)
    }
  }

  async function itemContextAction (e: any, name: string, documentation: string) {
    verticalIconsPlugin.appManager.deactivatePlugin(name)
    if (e.target.parentElement.classList.contains('active')) {
      verticalIconsPlugin.select('filePanel')
    }
    verticalIconsPlugin.renderComponent()
  }

  useEffect(() => {
    console.log('panel ref ', iconPanelRef.current)
    console.log('targetProfiles ', verticalIconsPlugin.targetProfileForChange)
  }, [])

  useEffect(() => {
    const themeModule = verticalIconsPlugin.registry.get('themeModule').api
    themeModule.events.on('themeChanged', (theme) => {
      onThemeChanged(theme.quality)
    })
  }, [])

  return (
    <div id="iconsP" className="h-100">
      <div className="remixui_icons" ref={iconPanelRef}>
        <div style={{ borderBottom: '1px solid #3f4455' }}>
          <Home verticalIconPlugin={verticalIconsPlugin} />
          {verticalIconsPlugin.targetProfileForChange &&
          Object.keys(verticalIconsPlugin.targetProfileForChange).length
            ? Object.keys(verticalIconsPlugin.targetProfileForChange)
              .filter(p => p !== 'settings')
              .filter(p => p !== 'pluginManager')
              .filter(p => p === 'filePanel')
              .map(p => (
                <div id="fileExplorerIcons" key={
                  verticalIconsPlugin.targetProfileForChange[p].displayName
                } data-id="verticalIconsFileExplorerIcons">
                  <Icon
                    kind={verticalIconsPlugin.targetProfileForChange[p].kind}
                    displayName={
                      verticalIconsPlugin.targetProfileForChange[p].displayName
                    }
                    documentation={
                      verticalIconsPlugin.targetProfileForChange[p]
                        .documentation
                    }
                    icon={verticalIconsPlugin.targetProfileForChange[p].icon}
                    name={verticalIconsPlugin.targetProfileForChange[p].name}
                    tooltip={
                      verticalIconsPlugin.targetProfileForChange[p].tooltip
                    }
                    verticalIconPlugin={verticalIconsPlugin}
                    contextMenuAction={itemContextAction}
                  />
                </div>
              ))
            : null}
          {verticalIconsPlugin.targetProfileForChange &&
          Object.keys(verticalIconsPlugin.targetProfileForChange).length
            ? Object.keys(verticalIconsPlugin.targetProfileForChange)
              .filter(p => p !== 'settings')
              .filter(p => p !== 'pluginManager')
              .filter(p => p === 'solidity')
              .map(p => (
                <div id="compileIcons" key={
                  verticalIconsPlugin.targetProfileForChange[p].displayName
                }>
                  <Icon
                    kind={verticalIconsPlugin.targetProfileForChange[p].kind}
                    displayName={
                      verticalIconsPlugin.targetProfileForChange[p].displayName
                    }
                    documentation={
                      verticalIconsPlugin.targetProfileForChange[p]
                        .documentation
                    }
                    icon={verticalIconsPlugin.targetProfileForChange[p].icon}
                    name={verticalIconsPlugin.targetProfileForChange[p].name}
                    tooltip={
                      verticalIconsPlugin.targetProfileForChange[p].tooltip
                    }
                    verticalIconPlugin={verticalIconsPlugin}
                    contextMenuAction={itemContextAction}
                    key={
                      verticalIconsPlugin.targetProfileForChange[p].displayName
                    }
                  />
                </div>
              ))
            : null}
          {verticalIconsPlugin.targetProfileForChange &&
          Object.keys(verticalIconsPlugin.targetProfileForChange).length
            ? Object.keys(verticalIconsPlugin.targetProfileForChange)
              .filter(p => p !== 'settings')
              .filter(p => p !== 'pluginManager')
              .filter(p => p === 'udapp')
              .map(p => (
                <div id="compileIcons" key={
                  verticalIconsPlugin.targetProfileForChange[p].displayName
                }>
                  <Icon
                    kind={verticalIconsPlugin.targetProfileForChange[p].kind}
                    displayName={
                      verticalIconsPlugin.targetProfileForChange[p].displayName
                    }
                    documentation={
                      verticalIconsPlugin.targetProfileForChange[p]
                        .documentation
                    }
                    icon={verticalIconsPlugin.targetProfileForChange[p].icon}
                    name={verticalIconsPlugin.targetProfileForChange[p].name}
                    tooltip={
                      verticalIconsPlugin.targetProfileForChange[p].tooltip
                    }
                    verticalIconPlugin={verticalIconsPlugin}
                    contextMenuAction={itemContextAction}
                    key={
                      verticalIconsPlugin.targetProfileForChange[p].displayName
                    }
                  />
                </div>
              ))
            : null}
          {verticalIconsPlugin.targetProfileForChange &&
          Object.keys(verticalIconsPlugin.targetProfileForChange).length
            ? Object.keys(verticalIconsPlugin.targetProfileForChange)
              .filter(p => p !== 'settings')
              .filter(p => p !== 'pluginManager')
              .filter(p => p === 'solidityStaticAnalysis')
              .map(p => (
                <div id="analysisIcons" key={
                  verticalIconsPlugin.targetProfileForChange[p].displayName
                }>
                  <Icon
                    kind={verticalIconsPlugin.targetProfileForChange[p].kind}
                    displayName={
                      verticalIconsPlugin.targetProfileForChange[p].displayName
                    }
                    documentation={
                      verticalIconsPlugin.targetProfileForChange[p]
                        .documentation
                    }
                    icon={verticalIconsPlugin.targetProfileForChange[p].icon}
                    name={verticalIconsPlugin.targetProfileForChange[p].name}
                    tooltip={
                      verticalIconsPlugin.targetProfileForChange[p].tooltip
                    }
                    verticalIconPlugin={verticalIconsPlugin}
                    contextMenuAction={itemContextAction}
                    key={
                      verticalIconsPlugin.targetProfileForChange[p].displayName
                    }
                  />
                </div>
              ))
            : null}
          {verticalIconsPlugin.targetProfileForChange &&
          Object.keys(verticalIconsPlugin.targetProfileForChange).length
            ? Object.keys(verticalIconsPlugin.targetProfileForChange)
              .filter(p => p !== 'settings')
              .filter(p => p !== 'pluginManager')
              .filter(p => p === 'debugger') // || 'debugging')
              .map(p => (
                <div id="debuggingIcons" data-id="verticalIconsDebuggingIcons" key={
                  verticalIconsPlugin.targetProfileForChange[p].displayName
                }>
                  <Icon
                    kind={verticalIconsPlugin.targetProfileForChange[p].kind}
                    displayName={
                      verticalIconsPlugin.targetProfileForChange[p].displayName
                    }
                    documentation={
                      verticalIconsPlugin.targetProfileForChange[p]
                        .documentation
                    }
                    icon={verticalIconsPlugin.targetProfileForChange[p].icon}
                    name={verticalIconsPlugin.targetProfileForChange[p].name}
                    tooltip={
                      verticalIconsPlugin.targetProfileForChange[p].tooltip
                    }
                    verticalIconPlugin={verticalIconsPlugin}
                    contextMenuAction={itemContextAction}
                    key={
                      verticalIconsPlugin.targetProfileForChange[p].displayName
                    }
                  />
                </div>
              ))
            : null}
        </div>
        <div
          id="remixuiScrollable"
          className="remixui_scrollable-container remixui_scrollbar remixui_hide-scroll"
          ref={scrollableRef}
        >
          <OtherIcons>
            {Object.keys(verticalIconsPlugin.targetProfileForChange)
              .filter(p => p !== 'settings')
              .filter(p => p !== 'pluginManager')
              .filter(p => p !== 'filePanel')
              .filter(p => p !== 'debugger')
              .filter(p => p !== 'compiler')
              .filter(p => p !== 'solidity')
              .filter(p => p !== 'udapp')
              .filter(p => p !== 'testing')
              .filter(p => p !== 'solidityStaticAnalysis') // 'filePanel') || 'fileexplorer')
              .map(p => (
                <Icon
                  kind={verticalIconsPlugin.targetProfileForChange[p].kind}
                  displayName={
                    verticalIconsPlugin.targetProfileForChange[p].displayName
                  }
                  documentation={
                    verticalIconsPlugin.targetProfileForChange[p].documentation
                  }
                  icon={verticalIconsPlugin.targetProfileForChange[p].icon}
                  name={verticalIconsPlugin.targetProfileForChange[p].name}
                  tooltip={
                    verticalIconsPlugin.targetProfileForChange[p].tooltip
                  }
                  verticalIconPlugin={verticalIconsPlugin}
                  contextMenuAction={itemContextAction}
                  key={
                    verticalIconsPlugin.targetProfileForChange[p].displayName
                  }
                />
              ))}
          </OtherIcons>
        </div>
        {scrollableRef.current && scrollableRef.current.scrollHeight > scrollableRef.current.clientHeight
          ? <i className="fa fa-chevron-double-down remixui_icon-chevron m-3"></i>
          : null
        }
        {verticalIconsPlugin.targetProfileForChange &&
          Object.keys(verticalIconsPlugin.targetProfileForChange).length ? (
            <Fragment>
              <Settings>
                <>
                  {Object.keys(verticalIconsPlugin.targetProfileForChange)
                    .filter(p => p === 'pluginManager')
                    .map(p => (
                      <Icon
                        kind={
                          verticalIconsPlugin.targetProfileForChange[p].kind
                        }
                        displayName={
                          verticalIconsPlugin.targetProfileForChange[p]
                            .displayName
                        }
                        documentation={
                          verticalIconsPlugin.targetProfileForChange[p]
                            .documentation
                        }
                        icon={
                          verticalIconsPlugin.targetProfileForChange[p].icon
                        }
                        name={
                          verticalIconsPlugin.targetProfileForChange[p].name
                        }
                        tooltip={
                          verticalIconsPlugin.targetProfileForChange[p].tooltip
                        }
                        verticalIconPlugin={verticalIconsPlugin}
                        contextMenuAction={itemContextAction}
                        key={
                          verticalIconsPlugin.targetProfileForChange[p]
                            .displayName
                        }
                      />
                    ))}
                  {Object.keys(verticalIconsPlugin.targetProfileForChange)
                    .filter(p => p === 'settings')
                    .map(p => (
                      <Icon
                        kind={
                          verticalIconsPlugin.targetProfileForChange[p].kind
                        }
                        displayName={
                          verticalIconsPlugin.targetProfileForChange[p]
                            .displayName
                        }
                        documentation={
                          verticalIconsPlugin.targetProfileForChange[p]
                            .documentation
                        }
                        icon={
                          verticalIconsPlugin.targetProfileForChange[p].icon
                        }
                        name={
                          verticalIconsPlugin.targetProfileForChange[p].name
                        }
                        tooltip={
                          verticalIconsPlugin.targetProfileForChange[p].tooltip
                        }
                        verticalIconPlugin={verticalIconsPlugin}
                        contextMenuAction={itemContextAction}
                        key={
                          verticalIconsPlugin.targetProfileForChange[p]
                            .displayName
                        }
                      />
                    ))}
                </>
              </Settings>
            </Fragment>
          ) : null}
      </div>
    </div>
  )
}
