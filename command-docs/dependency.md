`@n8codes/sfp dependency`
==========================

Manage the dependencies of a project

* [`@n8codes/sfp dependency expand`](#flxbl-iosfp-dependency-expand)
* [`@n8codes/sfp dependency install`](#flxbl-iosfp-dependency-install)
* [`@n8codes/sfp dependency shrink`](#flxbl-iosfp-dependency-shrink)

## `@n8codes/sfp dependency expand`

Expand the dependency list in sfdx-project.json file for each package, fix the gap of dependencies from its dependent packages

```
USAGE
  $ @n8codes/sfp dependency expand -v <value> [-o] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -o, --overwrite                     Flag to overwrite existing sfdx-project.json file
  -v, --targetdevhubusername=<value>  (required) Username or alias of the Dev Hub org.
      --loglevel=<option>             [default: info] logging level for this command invocation
                                      <options: trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL>

DESCRIPTION
  Expand the dependency list in sfdx-project.json file for each package, fix the gap of dependencies from its dependent
  packages
```

_See code: [src/commands/dependency/expand.ts](https://github.com/flxbl-io/sfp/blob/v37.0.1/src/commands/dependency/expand.ts)_

## `@n8codes/sfp dependency install`

Install all the external dependencies of a given project

```
USAGE
  $ @n8codes/sfp dependency install -o <value> -v <value> [-k <value>] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -k, --installationkeys=<value>      Installation key for key-protected packages (format is packagename:key -->
                                      core:key nCino:key vlocity:key to allow some packages without installation key)
  -o, --targetusername=<value>        (required) Username or alias of the target org.
  -v, --targetdevhubusername=<value>  (required) Username or alias of the Dev Hub org.
      --loglevel=<option>             [default: info] logging level for this command invocation
                                      <options: trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL>

DESCRIPTION
  Install all the external dependencies of a given project
```

_See code: [src/commands/dependency/install.ts](https://github.com/flxbl-io/sfp/blob/v37.0.1/src/commands/dependency/install.ts)_

## `@n8codes/sfp dependency shrink`

Shrink the dependency list in sfdx-project.json file for each package, remove duplicate dependencies that already exist in its dependent packages

```
USAGE
  $ @n8codes/sfp dependency shrink -v <value> [-o] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -o, --overwrite                     Flag to overwrite existing sfdx-project.json file
  -v, --targetdevhubusername=<value>  (required) Username or alias of the Dev Hub org.
      --loglevel=<option>             [default: info] logging level for this command invocation
                                      <options: trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL>

DESCRIPTION
  Shrink the dependency list in sfdx-project.json file for each package, remove duplicate dependencies that already
  exist in its dependent packages
```

_See code: [src/commands/dependency/shrink.ts](https://github.com/flxbl-io/sfp/blob/v37.0.1/src/commands/dependency/shrink.ts)_
