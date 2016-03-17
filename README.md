# npm three.js

NPM version of three-js 74 and its addons.

## install

```
npm i three-js
```

## import

```
var THREE = require("three-js")();
// return only three-js
```

you can extends three by its official addons
```
var THREE = require("three-js")(["EffectComposer"]);
// return three-js extended by THREE.EffectComposer
````

## available addons
 - AdaptativeToneMapping
 - BasicShader
 - BleachBypassShader
 - BlendShader
 - BloomShader
 - BloomPass
 - BokehPass
 - BokehShader
 - BokehShader2
 - BrightnessContrastShader
 - CanvasRenderer
 - ColorCorrectionShader
 - ColorifyShader
 - ConvolutionShader
 - CopyShader
 - DDSLoader
 - DigitalGlitch
 - DOFMipMapShader
 - DotScreenPass
 - DotScreenShader
 - EdgeShader
 - EdgeShader2
 - EffectComposer
 - FilmPass
 - FilmShader
 - FocusShader
 - FresnelShader
 - FXAAShader
 - GammaCorrectionShader
 - GlitchPass
 - HorizontalBlurShader
 - HorizontalTiltShiftShader
 - HueSaturationShader
 - JSONLoader
 - KaleidoShader
 - LuminosityShader
 - MarchingCubes
 - MaskPass
 - MirrorShader
 - MTLLoader
 - NormalMapShader
 - OBJLoader
 - OceanShader
 - ParallaxShader
 - Projector
 - RenderPass
 - RGBShiftShader
 - SavePass
 - SepiaShader
 - ShaderPass
 - SSAOShader
 - SVGLoader
 - TechnicolorShader
 - TexturePass
 - ToneMapShader
 - TriangleBlurShader
 - UnpackDepthRGBAShader
 - VerticalBlurShader
 - VerticalTiltShiftShader
 - VignetteShader

## request an addon

There is a lot of three-js addons, if one is missing, feel free to make a pull request or send it as an issue with a link to the addon.

## make a pull-request

Three-js addons looks like this in standard js:
```
THREE.EffectComposer = function(){
	//...
}
```

You only have to encapsulate the entire addon like this:
```
module.export = function( THREE ){
	
	THREE.EffectComposer = function(){
		//...
	}

};
```

Only official addons or very honorable and stable addons will be validated.

All tributes to original authors.