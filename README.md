# Meteor Native Packages

This is a bundle of modified core Meteor packages which will make Meteor suitable for a native environment. This project originally created due to the need of running Meteor with React-Native. This shouldn't be a permanent solution but rather a temporary one, until Meteor will decide to make it official by merging these packages into their master branch. Hopefully this is gonna happen asap.

## Quick start

First, add the following script in your `package.json` file, and replace `{{packages-dir}}` with your desired output path:

```json
{
  "scripts": {
    "install": "meteor-native link {{packages-dir}}"
  }
}
```

This will create a symbolic link to all native packages provided by Meteor Native Packages in the specified directory, the one that should go with the `METEOR_PACKAGE_DIRS` environment variable when starting a new Meteor project.

Now, install `meteor-native-packages` by running:

    npm install --save meteor-native-packages

At the end of the installation you should see an approval message, saying:

```
Packages have been successfully linked at:

    {{packages-dir}}
```

That's it! Your native Meteor packages are linked and ready to use.

## LICENSE

MIT
