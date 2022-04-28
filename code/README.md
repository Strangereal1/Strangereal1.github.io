# QUIZ 3

## demo show
![](screencaps/initial.png)

## position

```html
<a-box color="yellow" gps-projected-entity-place="latitude: <your-latitude>; longitude: <your-longitude>"/>
<a-camera gps-projected-camera rotation-reader></a-camera>
```

The latitude and longitude are converted to Spherical Mercator coordinates.
As for gps-entity-place, you can specify an altitude using the y component of the position attribute:

![](screencaps/position_changed.png)

```html
<a-box color="yellow" gps-projected-entity-place="latitude: <your-latitude>; longitude: <your-longitude>" position="0 30 0"/>
```

## scale

```html
<a-box color="yellow" gps-projected-entity-place="latitude: <your-latitude>; longitude: <your-longitude>" scale="0.5"/>
```

The scale attribute represents the multiple that the original model needs to be enlarged or reduced in the AR scene.

![](screencaps/scale_changed.png)

## rotation

```html
<a-box color="yellow" gps-projected-entity-place="latitude: <your-latitude>; longitude: <your-longitude>" rotation="0 180 0"/>
```

The rotation attribute represents the angle at which the original model needs to be rotated in the AR scene, and the angles need to be set in the X, Y, and Z axes respectively.

![](screencaps/rotation_changed.png)

## GPS coordinates

- latitude: 40.065662
- longitude: 116.311533
