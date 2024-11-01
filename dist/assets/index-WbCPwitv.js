import{c as ci,r as Vs,j as Gn}from"./index-Y2gx8xF4.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yi="168",Dr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hf=0,Sc=1,zf=2,Bh=1,Vf=2,ri=3,ui=0,hn=1,wn=2,Li=0,Ur=1,Ec=2,Tc=3,Ac=4,kf=5,Wi=100,Gf=101,Wf=102,Xf=103,jf=104,Yf=200,qf=201,Kf=202,Zf=203,Ya=204,qa=205,$f=206,Qf=207,Jf=208,ep=209,tp=210,np=211,ip=212,rp=213,sp=214,op=0,ap=1,lp=2,Io=3,cp=4,up=5,hp=6,dp=7,Hh=0,fp=1,pp=2,Ci=0,mp=1,gp=2,_p=3,vp=4,xp=5,yp=6,Mp=7,wc="attached",Sp="detached",zh=300,Hr=301,zr=302,Ka=303,Za=304,ko=306,Vr=1e3,bi=1001,Do=1002,cn=1003,Vh=1004,ys=1005,xn=1006,So=1007,oi=1008,hi=1009,kh=1010,Gh=1011,ws=1012,Nl=1013,qi=1014,Nn=1015,Ls=1016,Ol=1017,Fl=1018,kr=1020,Wh=35902,Xh=1021,jh=1022,Rn=1023,Yh=1024,qh=1025,Nr=1026,Gr=1027,Bl=1028,Hl=1029,Kh=1030,zl=1031,Vl=1033,Eo=33776,To=33777,Ao=33778,wo=33779,$a=35840,Qa=35841,Ja=35842,el=35843,tl=36196,nl=37492,il=37496,rl=37808,sl=37809,ol=37810,al=37811,ll=37812,cl=37813,ul=37814,hl=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,_l=37821,Ro=36492,vl=36494,xl=36495,Zh=36283,yl=36284,Ml=36285,Sl=36286,Rs=2300,bs=2301,na=2302,Rc=2400,bc=2401,Pc=2402,Ep=2500,Tp=0,$h=1,El=2,Ap=3200,wp=3201,kl=0,Rp=1,Ri="",an="srgb",Qt="srgb-linear",Gl="display-p3",Go="display-p3-linear",Uo="linear",Ct="srgb",No="rec709",Oo="p3",sr=7680,Lc=519,bp=512,Pp=513,Lp=514,Qh=515,Cp=516,Ip=517,Dp=518,Up=519,Tl=35044,Np=35048,Cc="300 es",ai=2e3,Fo=2001;class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ic=1234567;const Es=Math.PI/180,Wr=180/Math.PI;function On(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function $t(i,e,t){return Math.max(e,Math.min(t,i))}function Wl(i,e){return(i%e+e)%e}function Op(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Fp(i,e,t){return i!==e?(t-i)/(e-i):0}function Ts(i,e,t){return(1-t)*i+t*e}function Bp(i,e,t,n){return Ts(i,e,1-Math.exp(-t*n))}function Hp(i,e=1){return e-Math.abs(Wl(i,e*2)-e)}function zp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function kp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gp(i,e){return i+Math.random()*(e-i)}function Wp(i){return i*(.5-Math.random())}function Xp(i){i!==void 0&&(Ic=i);let e=Ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jp(i){return i*Es}function Yp(i){return i*Wr}function qp(i){return(i&i-1)===0&&i!==0}function Kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $p(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+n)/2),d=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),_=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*d,l*h,l*f,a*u);break;case"YZY":i.set(l*f,a*d,l*h,a*u);break;case"ZXZ":i.set(l*h,l*f,a*d,a*u);break;case"XZX":i.set(a*d,l*v,l*_,a*u);break;case"YXY":i.set(l*_,a*d,l*v,a*u);break;case"ZYZ":i.set(l*v,l*_,a*d,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Nt={DEG2RAD:Es,RAD2DEG:Wr,generateUUID:On,clamp:$t,euclideanModulo:Wl,mapLinear:Op,inverseLerp:Fp,lerp:Ts,damp:Bp,pingpong:Hp,smoothstep:zp,smootherstep:Vp,randInt:kp,randFloat:Gp,randFloatSpread:Wp,seededRandom:Xp,degToRad:jp,radToDeg:Yp,isPowerOfTwo:qp,ceilPowerOfTwo:Kp,floorPowerOfTwo:Zp,setQuaternionFromProperEuler:$p,normalize:xt,denormalize:Un};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,r,s,o,a,l,u){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u)}set(e,t,n,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],d=n[4],h=n[7],f=n[2],_=n[5],v=n[8],x=r[0],g=r[3],m=r[6],w=r[1],E=r[4],A=r[7],O=r[2],L=r[5],I=r[8];return s[0]=o*x+a*w+l*O,s[3]=o*g+a*E+l*L,s[6]=o*m+a*A+l*I,s[1]=u*x+d*w+h*O,s[4]=u*g+d*E+h*L,s[7]=u*m+d*A+h*I,s[2]=f*x+_*w+v*O,s[5]=f*g+_*E+v*L,s[8]=f*m+_*A+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return t*o*d-t*a*u-n*s*d+n*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=d*o-a*u,f=a*l-d*s,_=u*s-o*l,v=t*h+n*f+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*u-d*n)*x,e[2]=(a*n-r*o)*x,e[3]=f*x,e[4]=(d*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=_*x,e[7]=(n*l-u*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new ke;function Jh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qp(){const i=Ps("canvas");return i.style.display="block",i}const Dc={};function Or(i){i in Dc||(Dc[i]=!0,console.warn(i))}function Jp(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Uc=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nc=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ss={[Qt]:{transfer:Uo,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[an]:{transfer:Ct,primaries:No,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Go]:{transfer:Uo,primaries:Oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Nc),fromReference:i=>i.applyMatrix3(Uc)},[Gl]:{transfer:Ct,primaries:Oo,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nc),fromReference:i=>i.applyMatrix3(Uc).convertLinearToSRGB()}},em=new Set([Qt,Go]),pt={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!em.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ss[e].toReference,r=ss[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ss[i].primaries},getTransfer:function(i){return i===Ri?Uo:ss[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(ss[e].luminanceCoefficients)}};function Fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let or;class tm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=Ps("canvas")),or.width=e.width,or.height=e.height;const n=or.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fr(t[n]/255)*255):t[n]=Fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nm=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sa(r[o].image)):s.push(sa(r[o]))}else s=sa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let im=0;class jt extends Zi{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=bi,r=bi,s=xn,o=oi,a=Rn,l=hi,u=jt.DEFAULT_ANISOTROPY,d=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=On(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=zh;jt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],d=l[4],h=l[8],f=l[1],_=l[5],v=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(v+g)<.1&&Math.abs(u+_+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(u+1)/2,A=(_+1)/2,O=(m+1)/2,L=(d+f)/4,I=(h+x)/4,V=(v+g)/4;return E>A&&E>O?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=L/n,s=I/n):A>O?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=L/r,s=V/r):O<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),n=I/s,r=V/s),this.set(n,r,s,t),this}let w=Math.sqrt((g-v)*(g-v)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(g-v)/w,this.y=(h-x)/w,this.z=(f-d)/w,this.w=Math.acos((u+_+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rm extends Zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new jt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends rm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class td extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sm extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],u=n[r+1],d=n[r+2],h=n[r+3];const f=s[o+0],_=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=_,e[t+2]=v,e[t+3]=x;return}if(h!==x||l!==f||u!==_||d!==v){let g=1-a;const m=l*f+u*_+d*v+h*x,w=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const O=Math.sqrt(E),L=Math.atan2(O,m*w);g=Math.sin(g*L)/O,a=Math.sin(a*L)/O}const A=a*w;if(l=l*g+f*A,u=u*g+_*A,d=d*g+v*A,h=h*g+x*A,g===1-a){const O=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=O,u*=O,d*=O,h*=O}}e[t]=l,e[t+1]=u,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],u=n[r+2],d=n[r+3],h=s[o],f=s[o+1],_=s[o+2],v=s[o+3];return e[t]=a*v+d*h+l*_-u*f,e[t+1]=l*v+d*f+u*h-a*_,e[t+2]=u*v+d*_+a*f-l*h,e[t+3]=d*v-a*h-l*f-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),d=a(r/2),h=a(s/2),f=l(n/2),_=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*d*h+u*_*v,this._y=u*_*h-f*d*v,this._z=u*d*v+f*_*h,this._w=u*d*h-f*_*v;break;case"YXZ":this._x=f*d*h+u*_*v,this._y=u*_*h-f*d*v,this._z=u*d*v-f*_*h,this._w=u*d*h+f*_*v;break;case"ZXY":this._x=f*d*h-u*_*v,this._y=u*_*h+f*d*v,this._z=u*d*v+f*_*h,this._w=u*d*h-f*_*v;break;case"ZYX":this._x=f*d*h-u*_*v,this._y=u*_*h+f*d*v,this._z=u*d*v-f*_*h,this._w=u*d*h+f*_*v;break;case"YZX":this._x=f*d*h+u*_*v,this._y=u*_*h+f*d*v,this._z=u*d*v-f*_*h,this._w=u*d*h-f*_*v;break;case"XZY":this._x=f*d*h-u*_*v,this._y=u*_*h-f*d*v,this._z=u*d*v+f*_*h,this._w=u*d*h+f*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],d=t[6],h=t[10],f=n+a+h;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(d-l)*_,this._y=(s-u)*_,this._z=(o-r)*_}else if(n>a&&n>h){const _=2*Math.sqrt(1+n-a-h);this._w=(d-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+u)/_}else if(a>h){const _=2*Math.sqrt(1+a-n-h);this._w=(s-u)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+d)/_}else{const _=2*Math.sqrt(1+h-n-a);this._w=(o-r)/_,this._x=(s+u)/_,this._y=(l+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,d=t._w;return this._x=n*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-n*u,this._z=s*d+o*u+n*l-r*a,this._w=o*d-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-t;return this._w=_*o+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),h=Math.sin((1-t)*d)/u,f=Math.sin(t*d)/u;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*n),d=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*u+o*h-a*d,this.y=n+l*d+a*u-s*h,this.z=r+l*h+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new U,Oc=new Qe;class fi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),Gs.subVectors(this.max,os),ar.subVectors(e.a,os),lr.subVectors(e.b,os),cr.subVectors(e.c,os),vi.subVectors(lr,ar),xi.subVectors(cr,lr),Di.subVectors(ar,cr);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Di.z,Di.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Di.z,0,-Di.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Di.y,Di.x,0];return!aa(t,ar,lr,cr,Gs)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,ar,lr,cr,Gs))?!1:(Ws.crossVectors(vi,xi),t=[Ws.x,Ws.y,Ws.z],aa(t,ar,lr,cr,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new U,new U,new U,new U,new U,new U,new U,new U],Cn=new U,ks=new fi,ar=new U,lr=new U,cr=new U,vi=new U,xi=new U,Di=new U,os=new U,Gs=new U,Ws=new U,Ui=new U;function aa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ui.fromArray(i,s);const a=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),l=e.dot(Ui),u=t.dot(Ui),d=n.dot(Ui);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const om=new fi,as=new U,la=new U;class jn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):om.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(as,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(la.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(la)),this.expandByPoint(as.copy(e.center).sub(la))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new U,ca=new U,Xs=new U,yi=new U,ua=new U,js=new U,ha=new U;class Cs{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ca.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(ca);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Xs),a=yi.dot(this.direction),l=-yi.dot(Xs),u=yi.lengthSq(),d=Math.abs(1-o*o);let h,f,_,v;if(d>0)if(h=o*l-a,f=o*a-l,v=s*d,h>=0)if(f>=-v)if(f<=v){const x=1/d;h*=x,f*=x,_=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),_=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),_=-h*h+f*(f+2*l)+u;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),_=-h*h+f*(f+2*l)+u):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),_=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),_=-h*h+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ca).addScaledVector(Xs,f),_}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),r=Qn.dot(Qn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,r,s){ua.subVectors(t,e),js.subVectors(n,e),ha.crossVectors(ua,js);let o=this.direction.dot(ha),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(js.crossVectors(yi,js));if(l<0)return null;const u=a*this.direction.dot(ua.cross(yi));if(u<0||l+u>o)return null;const d=-a*yi.dot(ha);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,r,s,o,a,l,u,d,h,f,_,v,x,g){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u,d,h,f,_,v,x,g)}set(e,t,n,r,s,o,a,l,u,d,h,f,_,v,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=d,m[10]=h,m[14]=f,m[3]=_,m[7]=v,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ur.setFromMatrixColumn(e,0).length(),s=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,_=o*h,v=a*d,x=a*h;t[0]=l*d,t[4]=-l*h,t[8]=u,t[1]=_+v*u,t[5]=f-x*u,t[9]=-a*l,t[2]=x-f*u,t[6]=v+_*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,_=l*h,v=u*d,x=u*h;t[0]=f+x*a,t[4]=v*a-_,t[8]=o*u,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=_*a-v,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,_=l*h,v=u*d,x=u*h;t[0]=f-x*a,t[4]=-o*h,t[8]=v+_*a,t[1]=_+v*a,t[5]=o*d,t[9]=x-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,_=o*h,v=a*d,x=a*h;t[0]=l*d,t[4]=v*u-_,t[8]=f*u+x,t[1]=l*h,t[5]=x*u+f,t[9]=_*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,_=o*u,v=a*l,x=a*u;t[0]=l*d,t[4]=x-f*h,t[8]=v*h+_,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-u*d,t[6]=_*h+v,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,_=o*u,v=a*l,x=a*u;t[0]=l*d,t[4]=-h,t[8]=u*d,t[1]=f*h+x,t[5]=o*d,t[9]=_*h-v,t[2]=v*h-_,t[6]=a*d,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(am,e,lm)}lookAt(e,t,n){const r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Mi.crossVectors(n,_n),Mi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Mi.crossVectors(n,_n)),Mi.normalize(),Ys.crossVectors(_n,Mi),r[0]=Mi.x,r[4]=Ys.x,r[8]=_n.x,r[1]=Mi.y,r[5]=Ys.y,r[9]=_n.y,r[2]=Mi.z,r[6]=Ys.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],d=n[1],h=n[5],f=n[9],_=n[13],v=n[2],x=n[6],g=n[10],m=n[14],w=n[3],E=n[7],A=n[11],O=n[15],L=r[0],I=r[4],V=r[8],P=r[12],M=r[1],b=r[5],X=r[9],k=r[13],Z=r[2],ee=r[6],H=r[10],$=r[14],Y=r[3],le=r[7],pe=r[11],we=r[15];return s[0]=o*L+a*M+l*Z+u*Y,s[4]=o*I+a*b+l*ee+u*le,s[8]=o*V+a*X+l*H+u*pe,s[12]=o*P+a*k+l*$+u*we,s[1]=d*L+h*M+f*Z+_*Y,s[5]=d*I+h*b+f*ee+_*le,s[9]=d*V+h*X+f*H+_*pe,s[13]=d*P+h*k+f*$+_*we,s[2]=v*L+x*M+g*Z+m*Y,s[6]=v*I+x*b+g*ee+m*le,s[10]=v*V+x*X+g*H+m*pe,s[14]=v*P+x*k+g*$+m*we,s[3]=w*L+E*M+A*Z+O*Y,s[7]=w*I+E*b+A*ee+O*le,s[11]=w*V+E*X+A*H+O*pe,s[15]=w*P+E*k+A*$+O*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],h=e[6],f=e[10],_=e[14],v=e[3],x=e[7],g=e[11],m=e[15];return v*(+s*l*h-r*u*h-s*a*f+n*u*f+r*a*_-n*l*_)+x*(+t*l*_-t*u*f+s*o*f-r*o*_+r*u*d-s*l*d)+g*(+t*u*h-t*a*_-s*o*h+n*o*_+s*a*d-n*u*d)+m*(-r*a*d-t*l*h+t*a*f+r*o*h-n*o*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=e[9],f=e[10],_=e[11],v=e[12],x=e[13],g=e[14],m=e[15],w=h*g*u-x*f*u+x*l*_-a*g*_-h*l*m+a*f*m,E=v*f*u-d*g*u-v*l*_+o*g*_+d*l*m-o*f*m,A=d*x*u-v*h*u+v*a*_-o*x*_-d*a*m+o*h*m,O=v*h*l-d*x*l-v*a*f+o*x*f+d*a*g-o*h*g,L=t*w+n*E+r*A+s*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=w*I,e[1]=(x*f*s-h*g*s-x*r*_+n*g*_+h*r*m-n*f*m)*I,e[2]=(a*g*s-x*l*s+x*r*u-n*g*u-a*r*m+n*l*m)*I,e[3]=(h*l*s-a*f*s-h*r*u+n*f*u+a*r*_-n*l*_)*I,e[4]=E*I,e[5]=(d*g*s-v*f*s+v*r*_-t*g*_-d*r*m+t*f*m)*I,e[6]=(v*l*s-o*g*s-v*r*u+t*g*u+o*r*m-t*l*m)*I,e[7]=(o*f*s-d*l*s+d*r*u-t*f*u-o*r*_+t*l*_)*I,e[8]=A*I,e[9]=(v*h*s-d*x*s-v*n*_+t*x*_+d*n*m-t*h*m)*I,e[10]=(o*x*s-v*a*s+v*n*u-t*x*u-o*n*m+t*a*m)*I,e[11]=(d*a*s-o*h*s-d*n*u+t*h*u+o*n*_-t*a*_)*I,e[12]=O*I,e[13]=(d*x*r-v*h*r+v*n*f-t*x*f-d*n*g+t*h*g)*I,e[14]=(v*a*r-o*x*r-v*n*l+t*x*l+o*n*g-t*a*g)*I,e[15]=(o*h*r-d*a*r+d*n*l-t*h*l-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+n,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,d=o+o,h=a+a,f=s*u,_=s*d,v=s*h,x=o*d,g=o*h,m=a*h,w=l*u,E=l*d,A=l*h,O=n.x,L=n.y,I=n.z;return r[0]=(1-(x+m))*O,r[1]=(_+A)*O,r[2]=(v-E)*O,r[3]=0,r[4]=(_-A)*L,r[5]=(1-(f+m))*L,r[6]=(g+w)*L,r[7]=0,r[8]=(v+E)*I,r[9]=(g-w)*I,r[10]=(1-(f+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ur.set(r[0],r[1],r[2]).length();const o=ur.set(r[4],r[5],r[6]).length(),a=ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const u=1/s,d=1/o,h=1/a;return In.elements[0]*=u,In.elements[1]*=u,In.elements[2]*=u,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ai){const l=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let _,v;if(a===ai)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Fo)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ai){const l=this.elements,u=1/(t-e),d=1/(n-r),h=1/(o-s),f=(t+e)*u,_=(n+r)*d;let v,x;if(a===ai)v=(o+s)*h,x=-2*h;else if(a===Fo)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ur=new U,In=new Ze,am=new U(0,0,0),lm=new U(1,1,1),Mi=new U,Ys=new U,_n=new U,Fc=new Ze,Bc=new Qe;let bn=class nd{constructor(e=0,t=0,n=0,r=nd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],h=r[2],f=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,_),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";class id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cm=0;const Hc=new U,hr=new Qe,Jn=new Ze,qs=new U,ls=new U,um=new U,hm=new Qe,zc=new U(1,0,0),Vc=new U(0,1,0),kc=new U(0,0,1),Gc={type:"added"},dm={type:"removed"},dr={type:"childadded",child:null},da={type:"childremoved",child:null};class At extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new U,t=new bn,n=new Qe,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ke}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(zc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(ls,qs,this.up):Jn.lookAt(qs,ls,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(Jn),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gc),dr.child=e,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dm),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gc),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,hm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),_=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}At.DEFAULT_UP=new U(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new U,ei=new U,fa=new U,ti=new U,fr=new U,pr=new U,Wc=new U,pa=new U,ma=new U,ga=new U;class Xn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Dn.subVectors(e,t),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Dn.subVectors(r,t),ei.subVectors(n,t),fa.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(ei),l=Dn.dot(fa),u=ei.dot(ei),d=ei.dot(fa),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,_=(u*l-a*d)*f,v=(o*d-a*l)*f;return s.set(1-_-v,v,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static isFrontFacing(e,t,n,r){return Dn.subVectors(n,t),ei.subVectors(e,t),Dn.cross(ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Dn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;fr.subVectors(r,n),pr.subVectors(s,n),pa.subVectors(e,n);const l=fr.dot(pa),u=pr.dot(pa);if(l<=0&&u<=0)return t.copy(n);ma.subVectors(e,r);const d=fr.dot(ma),h=pr.dot(ma);if(d>=0&&h<=d)return t.copy(r);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(fr,o);ga.subVectors(e,s);const _=fr.dot(ga),v=pr.dot(ga);if(v>=0&&_<=v)return t.copy(s);const x=_*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(n).addScaledVector(pr,a);const g=d*v-_*h;if(g<=0&&h-d>=0&&_-v>=0)return Wc.subVectors(s,r),a=(h-d)/(h-d+(_-v)),t.copy(r).addScaledVector(Wc,a);const m=1/(g+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(fr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=pt.workingColorSpace){if(e=Wl(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=_a(o,s,e+1/3),this.g=_a(o,s,e),this.b=_a(o,s,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=an){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const n=rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return pt.fromWorkingColorSpace(nn.copy(this),e),Math.round($t(nn.r*255,0,255))*65536+Math.round($t(nn.g*255,0,255))*256+Math.round($t(nn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(nn.copy(this),t);const n=nn.r,r=nn.g,s=nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=an){pt.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,r=nn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Ks);const n=Ts(Si.h,Ks.h,t),r=Ts(Si.s,Ks.s,t),s=Ts(Si.l,Ks.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ne;Ne.NAMES=rd;let fm=0;class Fn extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Ur,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=qa,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==qa&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class li extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new U,Zs=new Fe;class vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Or("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}}class sd extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class od extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bn extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pm=0;const Sn=new Ze,va=new At,mr=new U,vn=new fi,cs=new fi,Xt=new U;class Gt extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?od:sd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(vn.min,cs.min),vn.expandByPoint(Xt),Xt.addVectors(vn.max,cs.max),vn.expandByPoint(Xt)):(vn.expandByPoint(cs.min),vn.expandByPoint(cs.max))}vn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)Xt.fromBufferAttribute(a,u),l&&(mr.fromBufferAttribute(e,u),Xt.add(mr)),r=Math.max(r,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<n.count;V++)a[V]=new U,l[V]=new U;const u=new U,d=new U,h=new U,f=new Fe,_=new Fe,v=new Fe,x=new U,g=new U;function m(V,P,M){u.fromBufferAttribute(n,V),d.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,V),_.fromBufferAttribute(s,P),v.fromBufferAttribute(s,M),d.sub(u),h.sub(u),_.sub(f),v.sub(f);const b=1/(_.x*v.y-v.x*_.y);isFinite(b)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(h,-_.y).multiplyScalar(b),g.copy(h).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(b),a[V].add(x),a[P].add(x),a[M].add(x),l[V].add(g),l[P].add(g),l[M].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let V=0,P=w.length;V<P;++V){const M=w[V],b=M.start,X=M.count;for(let k=b,Z=b+X;k<Z;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new U,A=new U,O=new U,L=new U;function I(V){O.fromBufferAttribute(r,V),L.copy(O);const P=a[V];E.copy(P),E.sub(O.multiplyScalar(O.dot(P))).normalize(),A.crossVectors(L,P);const b=A.dot(l[V])<0?-1:1;o.setXYZW(V,E.x,E.y,E.z,b)}for(let V=0,P=w.length;V<P;++V){const M=w[V],b=M.start,X=M.count;for(let k=b,Z=b+X;k<Z;k+=3)I(e.getX(k+0)),I(e.getX(k+1)),I(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,d=new U,h=new U;if(e)for(let f=0,_=e.count;f<_;f+=3){const v=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,g),a.add(d),l.add(d),u.add(d),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,_=t.count;f<_;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,h=a.normalized,f=new u.constructor(l.length*d);let _=0,v=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?_=l[x]*a.data.stride+a.offset:_=l[x]*d;for(let m=0;m<d;m++)f[v++]=u[_++]}return new vt(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,h=u.length;d<h;d++){const f=u[d],_=e(f,n);l.push(_)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const _=u[h];d.push(_.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let f=0,_=h.length;f<_;f++)d.push(h[f].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xc=new Ze,Ni=new Cs,$s=new jn,jc=new U,gr=new U,_r=new U,vr=new U,xa=new U,Qs=new U,Js=new Fe,eo=new Fe,to=new Fe,Yc=new U,qc=new U,Kc=new U,no=new U,io=new U;class un extends At{constructor(e=new Gt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],h=s[l];d!==0&&(xa.fromBufferAttribute(h,e),o?Qs.addScaledVector(xa,d):Qs.addScaledVector(xa.sub(t),d))}t.add(Qs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),Ni.copy(e.ray).recast(e.near),!($s.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere($s,jc)===null||Ni.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&(Xc.copy(s).invert(),Ni.copy(e.ray).applyMatrix4(Xc),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const g=f[v],m=o[g.materialIndex],w=Math.max(g.start,_.start),E=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let A=w,O=E;A<O;A+=3){const L=a.getX(A),I=a.getX(A+1),V=a.getX(A+2);r=ro(this,m,e,n,u,d,h,L,I,V),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),x=Math.min(a.count,_.start+_.count);for(let g=v,m=x;g<m;g+=3){const w=a.getX(g),E=a.getX(g+1),A=a.getX(g+2);r=ro(this,o,e,n,u,d,h,w,E,A),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const g=f[v],m=o[g.materialIndex],w=Math.max(g.start,_.start),E=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let A=w,O=E;A<O;A+=3){const L=A,I=A+1,V=A+2;r=ro(this,m,e,n,u,d,h,L,I,V),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),x=Math.min(l.count,_.start+_.count);for(let g=v,m=x;g<m;g+=3){const w=g,E=g+1,A=g+2;r=ro(this,o,e,n,u,d,h,w,E,A),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function mm(i,e,t,n,r,s,o,a){let l;if(e.side===hn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ui,a),l===null)return null;io.copy(a),io.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(io);return u<t.near||u>t.far?null:{distance:u,point:io.clone(),object:i}}function ro(i,e,t,n,r,s,o,a,l,u){i.getVertexPosition(a,gr),i.getVertexPosition(l,_r),i.getVertexPosition(u,vr);const d=mm(i,e,t,n,gr,_r,vr,no);if(d){r&&(Js.fromBufferAttribute(r,a),eo.fromBufferAttribute(r,l),to.fromBufferAttribute(r,u),d.uv=Xn.getInterpolation(no,gr,_r,vr,Js,eo,to,new Fe)),s&&(Js.fromBufferAttribute(s,a),eo.fromBufferAttribute(s,l),to.fromBufferAttribute(s,u),d.uv1=Xn.getInterpolation(no,gr,_r,vr,Js,eo,to,new Fe)),o&&(Yc.fromBufferAttribute(o,a),qc.fromBufferAttribute(o,l),Kc.fromBufferAttribute(o,u),d.normal=Xn.getInterpolation(no,gr,_r,vr,Yc,qc,Kc,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new U,materialIndex:0};Xn.getNormal(gr,_r,vr,h.normal),d.face=h}return d}class Is extends Gt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],h=[];let f=0,_=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Bn(u,3)),this.setAttribute("normal",new Bn(d,3)),this.setAttribute("uv",new Bn(h,2));function v(x,g,m,w,E,A,O,L,I,V,P){const M=A/I,b=O/V,X=A/2,k=O/2,Z=L/2,ee=I+1,H=V+1;let $=0,Y=0;const le=new U;for(let pe=0;pe<H;pe++){const we=pe*b-k;for(let ze=0;ze<ee;ze++){const Je=ze*M-X;le[x]=Je*w,le[g]=we*E,le[m]=Z,u.push(le.x,le.y,le.z),le[x]=0,le[g]=0,le[m]=L>0?1:-1,d.push(le.x,le.y,le.z),h.push(ze/I),h.push(1-pe/V),$+=1}}for(let pe=0;pe<V;pe++)for(let we=0;we<I;we++){const ze=f+we+ee*pe,Je=f+we+ee*(pe+1),te=f+(we+1)+ee*(pe+1),he=f+(we+1)+ee*pe;l.push(ze,Je,he),l.push(Je,te,he),Y+=6}a.addGroup(_,Y,P),_+=Y,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function on(i){const e={};for(let t=0;t<i.length;t++){const n=Xr(i[t]);for(const r in n)e[r]=n[r]}return e}function gm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ad(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const ld={clone:Xr,merge:on};var _m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cd extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new U,Zc=new Fe,$c=new Fe;class ln extends cd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,$c),t.subVectors($c,Zc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xr=-90,yr=1;class xm extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(xr,yr,e,t);r.layers=this.layers,this.add(r);const s=new ln(xr,yr,e,t);s.layers=this.layers,this.add(s);const o=new ln(xr,yr,e,t);o.layers=this.layers,this.add(o);const a=new ln(xr,yr,e,t);a.layers=this.layers,this.add(a);const l=new ln(xr,yr,e,t);l.layers=this.layers,this.add(l);const u=new ln(xr,yr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(h,f,_),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ud extends jt{constructor(e,t,n,r,s,o,a,l,u,d){e=e!==void 0?e:[],t=t!==void 0?t:Hr,super(e,t,n,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ym extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ud(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Is(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Li});s.uniforms.tEquirect.value=t;const o=new un(r,s),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=xn),new xm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const ya=new U,Mm=new U,Sm=new ke;class wi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ya.subVectors(n,t).cross(Mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ya),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sm.getNormalMatrix(e),r=this.coplanarPoint(ya).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new jn,so=new U;class Xl{constructor(e=new wi,t=new wi,n=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],_=r[8],v=r[9],x=r[10],g=r[11],m=r[12],w=r[13],E=r[14],A=r[15];if(n[0].setComponents(l-s,f-u,g-_,A-m).normalize(),n[1].setComponents(l+s,f+u,g+_,A+m).normalize(),n[2].setComponents(l+o,f+d,g+v,A+w).normalize(),n[3].setComponents(l-o,f-d,g-v,A-w).normalize(),n[4].setComponents(l-a,f-h,g-x,A-E).normalize(),t===ai)n[5].setComponents(l+a,f+h,g+x,A+E).normalize();else if(t===Fo)n[5].setComponents(a,h,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(so.x=r.normal.x>0?e.max.x:e.min.x,so.y=r.normal.y>0?e.max.y:e.min.y,so.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Em(i){const e=new WeakMap;function t(a,l){const u=a.array,d=a.usage,h=u.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,u,d),a.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,u){const d=l.array,h=l._updateRange,f=l.updateRanges;if(i.bindBuffer(u,a),h.count===-1&&f.length===0&&i.bufferSubData(u,0,d),f.length!==0){for(let _=0,v=f.length;_<v;_++){const x=f[_];i.bufferSubData(u,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(u,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Wo extends Gt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),u=a+1,d=l+1,h=e/a,f=t/l,_=[],v=[],x=[],g=[];for(let m=0;m<d;m++){const w=m*f-o;for(let E=0;E<u;E++){const A=E*h-s;v.push(A,-w,0),x.push(0,0,1),g.push(E/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){const E=w+u*m,A=w+u*(m+1),O=w+1+u*(m+1),L=w+1+u*m;_.push(E,A,L),_.push(A,O,L)}this.setIndex(_),this.setAttribute("position",new Bn(v,3)),this.setAttribute("normal",new Bn(x,3)),this.setAttribute("uv",new Bn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Am=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Im=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Om=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ym=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Km=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",tg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ng=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,l_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,__=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,v_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,S_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,W_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Tm,alphahash_pars_fragment:Am,alphamap_fragment:wm,alphamap_pars_fragment:Rm,alphatest_fragment:bm,alphatest_pars_fragment:Pm,aomap_fragment:Lm,aomap_pars_fragment:Cm,batching_pars_vertex:Im,batching_vertex:Dm,begin_vertex:Um,beginnormal_vertex:Nm,bsdfs:Om,iridescence_fragment:Fm,bumpmap_pars_fragment:Bm,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:Vm,clipping_planes_vertex:km,color_fragment:Gm,color_pars_fragment:Wm,color_pars_vertex:Xm,color_vertex:jm,common:Ym,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Km,displacementmap_pars_vertex:Zm,displacementmap_vertex:$m,emissivemap_fragment:Qm,emissivemap_pars_fragment:Jm,colorspace_fragment:eg,colorspace_pars_fragment:tg,envmap_fragment:ng,envmap_common_pars_fragment:ig,envmap_pars_fragment:rg,envmap_pars_vertex:sg,envmap_physical_pars_fragment:gg,envmap_vertex:og,fog_vertex:ag,fog_pars_vertex:lg,fog_fragment:cg,fog_pars_fragment:ug,gradientmap_pars_fragment:hg,lightmap_pars_fragment:dg,lights_lambert_fragment:fg,lights_lambert_pars_fragment:pg,lights_pars_begin:mg,lights_toon_fragment:_g,lights_toon_pars_fragment:vg,lights_phong_fragment:xg,lights_phong_pars_fragment:yg,lights_physical_fragment:Mg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Eg,lights_fragment_maps:Tg,lights_fragment_end:Ag,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:bg,logdepthbuf_vertex:Pg,map_fragment:Lg,map_pars_fragment:Cg,map_particle_fragment:Ig,map_particle_pars_fragment:Dg,metalnessmap_fragment:Ug,metalnessmap_pars_fragment:Ng,morphinstance_vertex:Og,morphcolor_vertex:Fg,morphnormal_vertex:Bg,morphtarget_pars_vertex:Hg,morphtarget_vertex:zg,normal_fragment_begin:Vg,normal_fragment_maps:kg,normal_pars_fragment:Gg,normal_pars_vertex:Wg,normal_vertex:Xg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Kg,iridescence_pars_fragment:Zg,opaque_fragment:$g,packing:Qg,premultiplied_alpha_fragment:Jg,project_vertex:e_,dithering_fragment:t_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:r_,shadowmap_pars_fragment:s_,shadowmap_pars_vertex:o_,shadowmap_vertex:a_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:u_,skinning_vertex:h_,skinnormal_vertex:d_,specularmap_fragment:f_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:__,transmission_pars_fragment:v_,uv_pars_fragment:x_,uv_pars_vertex:y_,uv_vertex:M_,worldpos_vertex:S_,background_vert:E_,background_frag:T_,backgroundCube_vert:A_,backgroundCube_frag:w_,cube_vert:R_,cube_frag:b_,depth_vert:P_,depth_frag:L_,distanceRGBA_vert:C_,distanceRGBA_frag:I_,equirect_vert:D_,equirect_frag:U_,linedashed_vert:N_,linedashed_frag:O_,meshbasic_vert:F_,meshbasic_frag:B_,meshlambert_vert:H_,meshlambert_frag:z_,meshmatcap_vert:V_,meshmatcap_frag:k_,meshnormal_vert:G_,meshnormal_frag:W_,meshphong_vert:X_,meshphong_frag:j_,meshphysical_vert:Y_,meshphysical_frag:q_,meshtoon_vert:K_,meshtoon_frag:Z_,points_vert:$_,points_frag:Q_,shadow_vert:J_,shadow_frag:ev,sprite_vert:tv,sprite_frag:nv},ve={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Wn={basic:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:on([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:on([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:on([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:on([ve.points,ve.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:on([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:on([ve.common,ve.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:on([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:on([ve.sprite,ve.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:on([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:on([ve.lights,ve.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Wn.physical={uniforms:on([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const oo={r:0,b:0,g:0},Fi=new bn,iv=new Ze;function rv(i,e,t,n,r,s,o){const a=new Ne(0);let l=s===!0?0:1,u,d,h=null,f=0,_=null;function v(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function x(w){let E=!1;const A=v(w);A===null?m(a,l):A&&A.isColor&&(m(A,1),E=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,E){const A=v(E);A&&(A.isCubeTexture||A.mapping===ko)?(d===void 0&&(d=new un(new Is(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Xr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Fi.copy(E.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(iv.makeRotationFromEuler(Fi)),d.material.toneMapped=pt.getTransfer(A.colorSpace)!==Ct,(h!==A||f!==A.version||_!==i.toneMapping)&&(d.material.needsUpdate=!0,h=A,f=A.version,_=i.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new un(new Wo(2,2),new di({name:"BackgroundMaterial",uniforms:Xr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=pt.getTransfer(A.colorSpace)!==Ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||_!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,_=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null))}function m(w,E){w.getRGB(oo,ad(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),l=E,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:x,addToRenderList:g}}function sv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(M,b,X,k,Z){let ee=!1;const H=h(k,X,b);s!==H&&(s=H,u(s.object)),ee=_(M,k,X,Z),ee&&v(M,k,X,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,A(M,b,X,k),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function u(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function h(M,b,X){const k=X.wireframe===!0;let Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let ee=Z[b.id];ee===void 0&&(ee={},Z[b.id]=ee);let H=ee[k];return H===void 0&&(H=f(l()),ee[k]=H),H}function f(M){const b=[],X=[],k=[];for(let Z=0;Z<t;Z++)b[Z]=0,X[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:X,attributeDivisors:k,object:M,attributes:{},index:null}}function _(M,b,X,k){const Z=s.attributes,ee=b.attributes;let H=0;const $=X.getAttributes();for(const Y in $)if($[Y].location>=0){const pe=Z[Y];let we=ee[Y];if(we===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),pe===void 0||pe.attribute!==we||we&&pe.data!==we.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function v(M,b,X,k){const Z={},ee=b.attributes;let H=0;const $=X.getAttributes();for(const Y in $)if($[Y].location>=0){let pe=ee[Y];pe===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const we={};we.attribute=pe,pe&&pe.data&&(we.data=pe.data),Z[Y]=we,H++}s.attributes=Z,s.attributesNum=H,s.index=k}function x(){const M=s.newAttributes;for(let b=0,X=M.length;b<X;b++)M[b]=0}function g(M){m(M,0)}function m(M,b){const X=s.newAttributes,k=s.enabledAttributes,Z=s.attributeDivisors;X[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),Z[M]!==b&&(i.vertexAttribDivisor(M,b),Z[M]=b)}function w(){const M=s.newAttributes,b=s.enabledAttributes;for(let X=0,k=b.length;X<k;X++)b[X]!==M[X]&&(i.disableVertexAttribArray(X),b[X]=0)}function E(M,b,X,k,Z,ee,H){H===!0?i.vertexAttribIPointer(M,b,X,Z,ee):i.vertexAttribPointer(M,b,X,k,Z,ee)}function A(M,b,X,k){x();const Z=k.attributes,ee=X.getAttributes(),H=b.defaultAttributeValues;for(const $ in ee){const Y=ee[$];if(Y.location>=0){let le=Z[$];if(le===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const pe=le.normalized,we=le.itemSize,ze=e.get(le);if(ze===void 0)continue;const Je=ze.buffer,te=ze.type,he=ze.bytesPerElement,Re=te===i.INT||te===i.UNSIGNED_INT||le.gpuType===Nl;if(le.isInterleavedBufferAttribute){const Se=le.data,Be=Se.stride,Xe=le.offset;if(Se.isInstancedInterleavedBuffer){for(let et=0;et<Y.locationSize;et++)m(Y.location+et,Se.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let et=0;et<Y.locationSize;et++)g(Y.location+et);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let et=0;et<Y.locationSize;et++)E(Y.location+et,we/Y.locationSize,te,pe,Be*he,(Xe+we/Y.locationSize*et)*he,Re)}else{if(le.isInstancedBufferAttribute){for(let Se=0;Se<Y.locationSize;Se++)m(Y.location+Se,le.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Se=0;Se<Y.locationSize;Se++)g(Y.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Se=0;Se<Y.locationSize;Se++)E(Y.location+Se,we/Y.locationSize,te,pe,we*he,we/Y.locationSize*Se*he,Re)}}else if(H!==void 0){const pe=H[$];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(Y.location,pe);break;case 3:i.vertexAttrib3fv(Y.location,pe);break;case 4:i.vertexAttrib4fv(Y.location,pe);break;default:i.vertexAttrib1fv(Y.location,pe)}}}}w()}function O(){V();for(const M in n){const b=n[M];for(const X in b){const k=b[X];for(const Z in k)d(k[Z].object),delete k[Z];delete b[X]}delete n[M]}}function L(M){if(n[M.id]===void 0)return;const b=n[M.id];for(const X in b){const k=b[X];for(const Z in k)d(k[Z].object),delete k[Z];delete b[X]}delete n[M.id]}function I(M){for(const b in n){const X=n[b];if(X[M.id]===void 0)continue;const k=X[M.id];for(const Z in k)d(k[Z].object),delete k[Z];delete X[M.id]}}function V(){P(),o=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:V,resetDefaultState:P,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function ov(i,e,t){let n;function r(u){n=u}function s(u,d){i.drawArrays(n,u,d),t.update(d,n,1)}function o(u,d,h){h!==0&&(i.drawArraysInstanced(n,u,d,h),t.update(d,n,h))}function a(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,d,0,h);let _=0;for(let v=0;v<h;v++)_+=d[v];t.update(_,n,1)}function l(u,d,h,f){if(h===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<u.length;v++)o(u[v],d[v],f[v]);else{_.multiDrawArraysInstancedWEBGL(n,u,0,d,0,f,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x];for(let x=0;x<f.length;x++)t.update(v,n,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function av(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==Rn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const I=L===Ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==hi&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Nn&&!I)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:A,maxSamples:O}}function lv(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new wi,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const _=h.length!==0||f||n!==0||r;return r=f,n=h.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=d(h,f,0)},this.setState=function(h,f,_){const v=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||v===null||v.length===0||s&&!g)s?d(null):u();else{const w=s?0:n,E=w*4;let A=m.clippingState||null;l.value=A,A=d(v,f,E,_);for(let O=0;O!==E;++O)A[O]=t[O];m.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,f,_,v){const x=h!==null?h.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const m=_+x*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,A=_;E!==x;++E,A+=4)o.copy(h[E]).applyMatrix4(w,a),o.normal.toArray(g,A),g[A+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function cv(i){let e=new WeakMap;function t(o,a){return a===Ka?o.mapping=Hr:a===Za&&(o.mapping=zr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ka||a===Za)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new ym(l.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class jl extends cd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ir=4,Qc=[.125,.215,.35,.446,.526,.582],Xi=20,Ma=new jl,Jc=new Ne;let Sa=null,Ea=0,Ta=0,Aa=!1;const Gi=(1+Math.sqrt(5))/2,Mr=1/Gi,eu=[new U(-Gi,Mr,0),new U(Gi,Mr,0),new U(-Mr,0,Gi),new U(Mr,0,Gi),new U(0,Gi,-Mr),new U(0,Gi,Mr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,Ea,Ta),this._renderer.xr.enabled=Aa,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ls,format:Rn,colorSpace:Qt,depthBuffer:!1},r=nu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uv(s)),this._blurMaterial=hv(s,e,t)}return r}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,r){const a=new ln(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Jc),d.toneMapping=Ci,d.autoClear=!1;const _=new li({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),v=new un(new Is,_);let x=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,x=!0):(_.color.copy(Jc),x=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const E=this._cubeSize;ao(r,w*E,m>2?E:0,E,E),d.setRenderTarget(r),x&&d.render(v,a),d.render(e,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Hr||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=eu[(r-s-1)%eu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new un(this._lodPlanes[r],u),f=u.uniforms,_=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Xi-1),x=s/v,g=isFinite(s)?1+Math.floor(d*x):Xi;g>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);const m=[];let w=0;for(let I=0;I<Xi;++I){const V=I/x,P=Math.exp(-V*V/2);m.push(P),I===0?w+=P:I<g&&(w+=2*P)}for(let I=0;I<m.length;I++)m[I]=m[I]/w;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=v,f.mipInt.value=E-n;const A=this._sizeLods[r],O=3*A*(r>E-Ir?r-E+Ir:0),L=4*(this._cubeSize-A);ao(t,O,L,3*A,2*A),l.setRenderTarget(t),l.render(h,Ma)}}function uv(i){const e=[],t=[],n=[];let r=i;const s=i-Ir+1+Qc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ir?l=Qc[o-i+Ir-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],_=6,v=6,x=3,g=2,m=1,w=new Float32Array(x*v*_),E=new Float32Array(g*v*_),A=new Float32Array(m*v*_);for(let L=0;L<_;L++){const I=L%3*2/3-1,V=L>2?0:-1,P=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];w.set(P,x*v*L),E.set(f,g*v*L);const M=[L,L,L,L,L,L];A.set(M,m*v*L)}const O=new Gt;O.setAttribute("position",new vt(w,x)),O.setAttribute("uv",new vt(E,g)),O.setAttribute("faceIndex",new vt(A,m)),e.push(O),r>Ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nu(i,e,t){const n=new Ki(i,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hv(i,e,t){const n=new Float32Array(Xi),r=new U(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function iu(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ru(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ka||l===Za,d=l===Hr||l===zr;if(u||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new tu(i)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const _=a.image;return u&&_&&_.height>0||d&&_&&r(_)?(t===null&&(t=new tu(i)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Or("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pv(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}f.removeEventListener("dispose",o),delete r[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const _=h.morphAttributes;for(const v in _){const x=_[v];for(let g=0,m=x.length;g<m;g++)e.update(x[g],i.ARRAY_BUFFER)}}function u(h){const f=[],_=h.index,v=h.attributes.position;let x=0;if(_!==null){const w=_.array;x=_.version;for(let E=0,A=w.length;E<A;E+=3){const O=w[E+0],L=w[E+1],I=w[E+2];f.push(O,L,L,I,I,O)}}else if(v!==void 0){const w=v.array;x=v.version;for(let E=0,A=w.length/3-1;E<A;E+=3){const O=E+0,L=E+1,I=E+2;f.push(O,L,L,I,I,O)}}else return;const g=new(Jh(f)?od:sd)(f,1);g.version=x;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function d(h){const f=s.get(h);if(f){const _=h.index;_!==null&&f.version<_.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function mv(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,_){i.drawElements(n,_,s,f*o),t.update(_,n,1)}function u(f,_,v){v!==0&&(i.drawElementsInstanced(n,_,s,f*o,v),t.update(_,n,v))}function d(f,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,f,0,v);let g=0;for(let m=0;m<v;m++)g+=_[m];t.update(g,n,1)}function h(f,_,v,x){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)u(f[m]/o,_[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,_,0,s,f,0,x,0,v);let m=0;for(let w=0;w<v;w++)m+=_[w];for(let w=0;w<x.length;w++)t.update(m,n,x[w])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function gv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function _v(i,e,t){const n=new WeakMap,r=new Et;function s(o,a,l){const u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let P=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),v===!0&&(E=2),x===!0&&(E=3);let A=a.attributes.position.count*E,O=1;A>e.maxTextureSize&&(O=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*O*4*h),I=new td(L,A,O,h);I.type=Nn,I.needsUpdate=!0;const V=E*4;for(let M=0;M<h;M++){const b=g[M],X=m[M],k=w[M],Z=A*O*4*M;for(let ee=0;ee<b.count;ee++){const H=ee*V;_===!0&&(r.fromBufferAttribute(b,ee),L[Z+H+0]=r.x,L[Z+H+1]=r.y,L[Z+H+2]=r.z,L[Z+H+3]=0),v===!0&&(r.fromBufferAttribute(X,ee),L[Z+H+4]=r.x,L[Z+H+5]=r.y,L[Z+H+6]=r.z,L[Z+H+7]=0),x===!0&&(r.fromBufferAttribute(k,ee),L[Z+H+8]=r.x,L[Z+H+9]=r.y,L[Z+H+10]=r.z,L[Z+H+11]=k.itemSize===4?r.w:1)}}f={count:h,texture:I,size:new Fe(A,O)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let x=0;x<u.length;x++)_+=u[x];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function vv(i,e,t,n){let r=new WeakMap;function s(l){const u=n.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class dd extends jt{constructor(e,t,n,r,s,o,a,l,u,d=Nr){if(d!==Nr&&d!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Nr&&(n=qi),n===void 0&&d===Gr&&(n=kr),super(null,r,s,o,a,l,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fd=new jt,su=new dd(1,1),pd=new td,md=new sm,gd=new ud,ou=[],au=[],lu=new Float32Array(16),cu=new Float32Array(9),uu=new Float32Array(4);function Zr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ou[r];if(s===void 0&&(s=new Float32Array(r),ou[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xo(i,e){let t=au[e];t===void 0&&(t=new Int32Array(e),au[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function Ev(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Vt(t,n))return;uu.set(n),i.uniformMatrix2fv(this.addr,!1,uu),kt(t,n)}}function Tv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Vt(t,n))return;cu.set(n),i.uniformMatrix3fv(this.addr,!1,cu),kt(t,n)}}function Av(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Vt(t,n))return;lu.set(n),i.uniformMatrix4fv(this.addr,!1,lu),kt(t,n)}}function wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function Pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function Lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Uv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(su.compareFunction=Qh,s=su):s=fd,t.setTexture2D(e||s,r)}function Nv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||md,r)}function Ov(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gd,r)}function Fv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||pd,r)}function Bv(i){switch(i){case 5126:return xv;case 35664:return yv;case 35665:return Mv;case 35666:return Sv;case 35674:return Ev;case 35675:return Tv;case 35676:return Av;case 5124:case 35670:return wv;case 35667:case 35671:return Rv;case 35668:case 35672:return bv;case 35669:case 35673:return Pv;case 5125:return Lv;case 36294:return Cv;case 36295:return Iv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Fv}}function Hv(i,e){i.uniform1fv(this.addr,e)}function zv(i,e){const t=Zr(e,this.size,2);i.uniform2fv(this.addr,t)}function Vv(i,e){const t=Zr(e,this.size,3);i.uniform3fv(this.addr,t)}function kv(i,e){const t=Zr(e,this.size,4);i.uniform4fv(this.addr,t)}function Gv(i,e){const t=Zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wv(i,e){const t=Zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xv(i,e){const t=Zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jv(i,e){i.uniform1iv(this.addr,e)}function Yv(i,e){i.uniform2iv(this.addr,e)}function qv(i,e){i.uniform3iv(this.addr,e)}function Kv(i,e){i.uniform4iv(this.addr,e)}function Zv(i,e){i.uniform1uiv(this.addr,e)}function $v(i,e){i.uniform2uiv(this.addr,e)}function Qv(i,e){i.uniform3uiv(this.addr,e)}function Jv(i,e){i.uniform4uiv(this.addr,e)}function e0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||fd,s[o])}function t0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||md,s[o])}function n0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||gd,s[o])}function i0(i,e,t){const n=this.cache,r=e.length,s=Xo(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||pd,s[o])}function r0(i){switch(i){case 5126:return Hv;case 35664:return zv;case 35665:return Vv;case 35666:return kv;case 35674:return Gv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return jv;case 35667:case 35671:return Yv;case 35668:case 35672:return qv;case 35669:case 35673:return Kv;case 5125:return Zv;case 36294:return $v;case 36295:return Qv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}class s0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bv(t.type)}}class o0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r0(t.type)}}class a0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function hu(i,e){i.seq.push(e),i.map[e.id]=e}function l0(i,e,t){const n=i.name,r=n.length;for(wa.lastIndex=0;;){const s=wa.exec(n),o=wa.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){hu(t,u===void 0?new s0(a,i,e):new o0(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new a0(a),hu(t,h)),t=h}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);l0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function du(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const c0=37297;let u0=0;function h0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function d0(i){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(i);let n;switch(e===t?n="":e===Oo&&t===No?n="LinearDisplayP3ToLinearSRGB":e===No&&t===Oo&&(n="LinearSRGBToLinearDisplayP3"),i){case Qt:case Go:return[n,"LinearTransferOETF"];case an:case Gl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function fu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+h0(i.getShaderSource(e),o)}else return r}function f0(i,e){const t=d0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function p0(i,e){let t;switch(e){case mp:t="Linear";break;case gp:t="Reinhard";break;case _p:t="Cineon";break;case vp:t="ACESFilmic";break;case yp:t="AgX";break;case Mp:t="Neutral";break;case xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lo=new U;function m0(){pt.getLuminanceCoefficients(lo);const i=lo.x.toFixed(4),e=lo.y.toFixed(4),t=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function _0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function v0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ms(i){return i!==""}function pu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(x0,M0)}const y0=new Map;function M0(i,e){let t=ot[e];if(t===void 0){const n=y0.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(i){return i.replace(S0,E0)}function E0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _u(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function T0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function A0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hr:case zr:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function R0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hh:e="ENVMAP_BLENDING_MULTIPLY";break;case fp:e="ENVMAP_BLENDING_MIX";break;case pp:e="ENVMAP_BLENDING_ADD";break}return e}function b0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function P0(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=T0(t),u=A0(t),d=w0(t),h=R0(t),f=b0(t),_=g0(t),v=_0(s),x=r.createProgram();let g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ms).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ms).join(`
`),m.length>0&&(m+=`
`)):(g=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),m=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?ot.tonemapping_pars_fragment:"",t.toneMapping!==Ci?p0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,f0("linearToOutputTexel",t.outputColorSpace),m0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),o=Al(o),o=pu(o,t),o=mu(o,t),a=Al(a),a=pu(a,t),a=mu(a,t),o=gu(o),a=gu(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=w+g+o,A=w+m+a,O=du(r,r.VERTEX_SHADER,E),L=du(r,r.FRAGMENT_SHADER,A);r.attachShader(x,O),r.attachShader(x,L),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(b){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(O).trim(),Z=r.getShaderInfoLog(L).trim();let ee=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,O,L);else{const $=fu(r,O,"vertex"),Y=fu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+X+`
`+$+`
`+Y)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(k===""||Z==="")&&(H=!1);H&&(b.diagnostics={runnable:ee,programLog:X,vertexShader:{log:k,prefix:g},fragmentShader:{log:Z,prefix:m}})}r.deleteShader(O),r.deleteShader(L),V=new bo(r,x),P=v0(r,x)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,c0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=L,this}let L0=0;class C0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new I0(e),t.set(e,n)),n}}class I0{constructor(e){this.id=L0++,this.code=e,this.usedTimes=0}}function D0(i,e,t,n,r,s,o){const a=new id,l=new C0,u=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(P){return u.add(P),P===0?"uv":`uv${P}`}function g(P,M,b,X,k){const Z=X.fog,ee=k.geometry,H=P.isMeshStandardMaterial?X.environment:null,$=(P.isMeshStandardMaterial?t:e).get(P.envMap||H),Y=$&&$.mapping===ko?$.image.height:null,le=v[P.type];P.precision!==null&&(_=r.getMaxPrecision(P.precision),_!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",_,"instead."));const pe=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,we=pe!==void 0?pe.length:0;let ze=0;ee.morphAttributes.position!==void 0&&(ze=1),ee.morphAttributes.normal!==void 0&&(ze=2),ee.morphAttributes.color!==void 0&&(ze=3);let Je,te,he,Re;if(le){const lt=Wn[le];Je=lt.vertexShader,te=lt.fragmentShader}else Je=P.vertexShader,te=P.fragmentShader,l.update(P),he=l.getVertexShaderID(P),Re=l.getFragmentShaderID(P);const Se=i.getRenderTarget(),Be=k.isInstancedMesh===!0,Xe=k.isBatchedMesh===!0,et=!!P.map,gt=!!P.matcap,B=!!$,tt=!!P.aoMap,je=!!P.lightMap,ht=!!P.bumpMap,Le=!!P.normalMap,wt=!!P.displacementMap,Ve=!!P.emissiveMap,Ye=!!P.metalnessMap,F=!!P.roughnessMap,T=P.anisotropy>0,J=P.clearcoat>0,re=P.dispersion>0,se=P.iridescence>0,oe=P.sheen>0,Ce=P.transmission>0,xe=T&&!!P.anisotropyMap,Ae=J&&!!P.clearcoatMap,$e=J&&!!P.clearcoatNormalMap,de=J&&!!P.clearcoatRoughnessMap,Me=se&&!!P.iridescenceMap,st=se&&!!P.iridescenceThicknessMap,Oe=oe&&!!P.sheenColorMap,Ee=oe&&!!P.sheenRoughnessMap,Ge=!!P.specularMap,nt=!!P.specularColorMap,Mt=!!P.specularIntensityMap,G=Ce&&!!P.transmissionMap,fe=Ce&&!!P.thicknessMap,ne=!!P.gradientMap,ie=!!P.alphaMap,me=P.alphaTest>0,Ue=!!P.alphaHash,it=!!P.extensions;let _t=Ci;P.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(_t=i.toneMapping);const Dt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Je,fragmentShader:te,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:Re,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:_,batching:Xe,batchingColor:Xe&&k._colorsTexture!==null,instancing:Be,instancingColor:Be&&k.instanceColor!==null,instancingMorph:Be&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Qt,alphaToCoverage:!!P.alphaToCoverage,map:et,matcap:gt,envMap:B,envMapMode:B&&$.mapping,envMapCubeUVHeight:Y,aoMap:tt,lightMap:je,bumpMap:ht,normalMap:Le,displacementMap:f&&wt,emissiveMap:Ve,normalMapObjectSpace:Le&&P.normalMapType===Rp,normalMapTangentSpace:Le&&P.normalMapType===kl,metalnessMap:Ye,roughnessMap:F,anisotropy:T,anisotropyMap:xe,clearcoat:J,clearcoatMap:Ae,clearcoatNormalMap:$e,clearcoatRoughnessMap:de,dispersion:re,iridescence:se,iridescenceMap:Me,iridescenceThicknessMap:st,sheen:oe,sheenColorMap:Oe,sheenRoughnessMap:Ee,specularMap:Ge,specularColorMap:nt,specularIntensityMap:Mt,transmission:Ce,transmissionMap:G,thicknessMap:fe,gradientMap:ne,opaque:P.transparent===!1&&P.blending===Ur&&P.alphaToCoverage===!1,alphaMap:ie,alphaTest:me,alphaHash:Ue,combine:P.combine,mapUv:et&&x(P.map.channel),aoMapUv:tt&&x(P.aoMap.channel),lightMapUv:je&&x(P.lightMap.channel),bumpMapUv:ht&&x(P.bumpMap.channel),normalMapUv:Le&&x(P.normalMap.channel),displacementMapUv:wt&&x(P.displacementMap.channel),emissiveMapUv:Ve&&x(P.emissiveMap.channel),metalnessMapUv:Ye&&x(P.metalnessMap.channel),roughnessMapUv:F&&x(P.roughnessMap.channel),anisotropyMapUv:xe&&x(P.anisotropyMap.channel),clearcoatMapUv:Ae&&x(P.clearcoatMap.channel),clearcoatNormalMapUv:$e&&x(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&x(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(P.iridescenceMap.channel),iridescenceThicknessMapUv:st&&x(P.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(P.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(P.sheenRoughnessMap.channel),specularMapUv:Ge&&x(P.specularMap.channel),specularColorMapUv:nt&&x(P.specularColorMap.channel),specularIntensityMapUv:Mt&&x(P.specularIntensityMap.channel),transmissionMapUv:G&&x(P.transmissionMap.channel),thicknessMapUv:fe&&x(P.thicknessMap.channel),alphaMapUv:ie&&x(P.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Le||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ee.attributes.uv&&(et||ie),fog:!!Z,useFog:P.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:et&&P.map.isVideoTexture===!0&&pt.getTransfer(P.map.colorSpace)===Ct,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===wn,flipSided:P.side===hn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:it&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&P.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Dt.vertexUv1s=u.has(1),Dt.vertexUv2s=u.has(2),Dt.vertexUv3s=u.has(3),u.clear(),Dt}function m(P){const M=[];if(P.shaderID?M.push(P.shaderID):(M.push(P.customVertexShaderID),M.push(P.customFragmentShaderID)),P.defines!==void 0)for(const b in P.defines)M.push(b),M.push(P.defines[b]);return P.isRawShaderMaterial===!1&&(w(M,P),E(M,P),M.push(i.outputColorSpace)),M.push(P.customProgramCacheKey),M.join()}function w(P,M){P.push(M.precision),P.push(M.outputColorSpace),P.push(M.envMapMode),P.push(M.envMapCubeUVHeight),P.push(M.mapUv),P.push(M.alphaMapUv),P.push(M.lightMapUv),P.push(M.aoMapUv),P.push(M.bumpMapUv),P.push(M.normalMapUv),P.push(M.displacementMapUv),P.push(M.emissiveMapUv),P.push(M.metalnessMapUv),P.push(M.roughnessMapUv),P.push(M.anisotropyMapUv),P.push(M.clearcoatMapUv),P.push(M.clearcoatNormalMapUv),P.push(M.clearcoatRoughnessMapUv),P.push(M.iridescenceMapUv),P.push(M.iridescenceThicknessMapUv),P.push(M.sheenColorMapUv),P.push(M.sheenRoughnessMapUv),P.push(M.specularMapUv),P.push(M.specularColorMapUv),P.push(M.specularIntensityMapUv),P.push(M.transmissionMapUv),P.push(M.thicknessMapUv),P.push(M.combine),P.push(M.fogExp2),P.push(M.sizeAttenuation),P.push(M.morphTargetsCount),P.push(M.morphAttributeCount),P.push(M.numDirLights),P.push(M.numPointLights),P.push(M.numSpotLights),P.push(M.numSpotLightMaps),P.push(M.numHemiLights),P.push(M.numRectAreaLights),P.push(M.numDirLightShadows),P.push(M.numPointLightShadows),P.push(M.numSpotLightShadows),P.push(M.numSpotLightShadowsWithMaps),P.push(M.numLightProbes),P.push(M.shadowMapType),P.push(M.toneMapping),P.push(M.numClippingPlanes),P.push(M.numClipIntersection),P.push(M.depthPacking)}function E(P,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),P.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),P.push(a.mask)}function A(P){const M=v[P.type];let b;if(M){const X=Wn[M];b=ld.clone(X.uniforms)}else b=P.uniforms;return b}function O(P,M){let b;for(let X=0,k=d.length;X<k;X++){const Z=d[X];if(Z.cacheKey===M){b=Z,++b.usedTimes;break}}return b===void 0&&(b=new P0(i,M,P,s),d.push(b)),b}function L(P){if(--P.usedTimes===0){const M=d.indexOf(P);d[M]=d[d.length-1],d.pop(),P.destroy()}}function I(P){l.remove(P)}function V(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:A,acquireProgram:O,releaseProgram:L,releaseShaderCache:I,programs:d,dispose:V}}function U0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function N0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,_,v,x,g){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:_,groupOrder:v,renderOrder:h.renderOrder,z:x,group:g},i[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=_,m.groupOrder=v,m.renderOrder=h.renderOrder,m.z=x,m.group=g),e++,m}function a(h,f,_,v,x,g){const m=o(h,f,_,v,x,g);_.transmission>0?n.push(m):_.transparent===!0?r.push(m):t.push(m)}function l(h,f,_,v,x,g){const m=o(h,f,_,v,x,g);_.transmission>0?n.unshift(m):_.transparent===!0?r.unshift(m):t.unshift(m)}function u(h,f){t.length>1&&t.sort(h||N0),n.length>1&&n.sort(f||vu),r.length>1&&r.sort(f||vu)}function d(){for(let h=e,f=i.length;h<f;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function O0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new xu,i.set(n,[o])):r>=s.length?(o=new xu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function F0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ne};break;case"SpotLight":t={position:new U,direction:new U,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function B0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let H0=0;function z0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function V0(i){const e=new F0,t=B0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new U);const r=new U,s=new Ze,o=new Ze;function a(u){let d=0,h=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let _=0,v=0,x=0,g=0,m=0,w=0,E=0,A=0,O=0,L=0,I=0;u.sort(z0);for(let P=0,M=u.length;P<M;P++){const b=u[P],X=b.color,k=b.intensity,Z=b.distance,ee=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=X.r*k,h+=X.g*k,f+=X.b*k;else if(b.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(b.sh.coefficients[H],k);I++}else if(b.isDirectionalLight){const H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const $=b.shadow,Y=t.get(b);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.directionalShadow[_]=Y,n.directionalShadowMap[_]=ee,n.directionalShadowMatrix[_]=b.shadow.matrix,w++}n.directional[_]=H,_++}else if(b.isSpotLight){const H=e.get(b);H.position.setFromMatrixPosition(b.matrixWorld),H.color.copy(X).multiplyScalar(k),H.distance=Z,H.coneCos=Math.cos(b.angle),H.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),H.decay=b.decay,n.spot[x]=H;const $=b.shadow;if(b.map&&(n.spotLightMap[O]=b.map,O++,$.updateMatrices(b),b.castShadow&&L++),n.spotLightMatrix[x]=$.matrix,b.castShadow){const Y=t.get(b);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=ee,A++}x++}else if(b.isRectAreaLight){const H=e.get(b);H.color.copy(X).multiplyScalar(k),H.halfWidth.set(b.width*.5,0,0),H.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=H,g++}else if(b.isPointLight){const H=e.get(b);if(H.color.copy(b.color).multiplyScalar(b.intensity),H.distance=b.distance,H.decay=b.decay,b.castShadow){const $=b.shadow,Y=t.get(b);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=ee,n.pointShadowMatrix[v]=b.shadow.matrix,E++}n.point[v]=H,v++}else if(b.isHemisphereLight){const H=e.get(b);H.skyColor.copy(b.color).multiplyScalar(k),H.groundColor.copy(b.groundColor).multiplyScalar(k),n.hemi[m]=H,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const V=n.hash;(V.directionalLength!==_||V.pointLength!==v||V.spotLength!==x||V.rectAreaLength!==g||V.hemiLength!==m||V.numDirectionalShadows!==w||V.numPointShadows!==E||V.numSpotShadows!==A||V.numSpotMaps!==O||V.numLightProbes!==I)&&(n.directional.length=_,n.spot.length=x,n.rectArea.length=g,n.point.length=v,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=A+O-L,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,V.directionalLength=_,V.pointLength=v,V.spotLength=x,V.rectAreaLength=g,V.hemiLength=m,V.numDirectionalShadows=w,V.numPointShadows=E,V.numSpotShadows=A,V.numSpotMaps=O,V.numLightProbes=I,n.version=H0++)}function l(u,d){let h=0,f=0,_=0,v=0,x=0;const g=d.matrixWorldInverse;for(let m=0,w=u.length;m<w;m++){const E=u[m];if(E.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),h++}else if(E.isSpotLight){const A=n.spot[_];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),_++}else if(E.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),o.identity(),s.copy(E.matrixWorld),s.premultiply(g),o.extractRotation(s),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){const A=n.hemi[x];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function yu(i){const e=new V0(i),t=[],n=[];function r(d){u.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function k0(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new yu(i),e.set(r,[a])):s>=o.length?(a=new yu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class G0 extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W0 extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y0(i,e,t){let n=new Xl;const r=new Fe,s=new Fe,o=new Et,a=new G0({depthPacking:wp}),l=new W0,u={},d=t.maxTextureSize,h={[ui]:hn,[hn]:ui,[wn]:wn},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:X0,fragmentShader:j0}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const v=new Gt;v.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new un(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let m=this.type;this.render=function(L,I,V){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const P=i.getRenderTarget(),M=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Li),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const k=m!==ri&&this.type===ri,Z=m===ri&&this.type!==ri;for(let ee=0,H=L.length;ee<H;ee++){const $=L[ee],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const le=Y.getFrameExtents();if(r.multiply(le),s.copy(Y.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/le.x),r.x=s.x*le.x,Y.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/le.y),r.y=s.y*le.y,Y.mapSize.y=s.y)),Y.map===null||k===!0||Z===!0){const we=this.type!==ri?{minFilter:cn,magFilter:cn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ki(r.x,r.y,we),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const pe=Y.getViewportCount();for(let we=0;we<pe;we++){const ze=Y.getViewport(we);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),X.viewport(o),Y.updateMatrices($,we),n=Y.getFrustum(),A(I,V,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===ri&&w(Y,V),Y.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(P,M,b)};function w(L,I){const V=e.update(x);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ki(r.x,r.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(I,null,V,f,x,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(I,null,V,_,x,null)}function E(L,I,V,P){let M=null;const b=V.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(b!==void 0)M=b;else if(M=V.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const X=M.uuid,k=I.uuid;let Z=u[X];Z===void 0&&(Z={},u[X]=Z);let ee=Z[k];ee===void 0&&(ee=M.clone(),Z[k]=ee,I.addEventListener("dispose",O)),M=ee}if(M.visible=I.visible,M.wireframe=I.wireframe,P===ri?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:h[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,V.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=i.properties.get(M);X.light=V}return M}function A(L,I,V,P,M){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===ri)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,L.matrixWorld);const k=e.update(L),Z=L.material;if(Array.isArray(Z)){const ee=k.groups;for(let H=0,$=ee.length;H<$;H++){const Y=ee[H],le=Z[Y.materialIndex];if(le&&le.visible){const pe=E(L,le,P,M);L.onBeforeShadow(i,L,I,V,k,pe,Y),i.renderBufferDirect(V,null,k,pe,L,Y),L.onAfterShadow(i,L,I,V,k,pe,Y)}}}else if(Z.visible){const ee=E(L,Z,P,M);L.onBeforeShadow(i,L,I,V,k,ee,null),i.renderBufferDirect(V,null,k,ee,L,null),L.onAfterShadow(i,L,I,V,k,ee,null)}}const X=L.children;for(let k=0,Z=X.length;k<Z;k++)A(X[k],I,V,P,M)}function O(L){L.target.removeEventListener("dispose",O);for(const V in u){const P=u[V],M=L.target.uuid;M in P&&(P[M].dispose(),delete P[M])}}}function q0(i){function e(){let G=!1;const fe=new Et;let ne=null;const ie=new Et(0,0,0,0);return{setMask:function(me){ne!==me&&!G&&(i.colorMask(me,me,me,me),ne=me)},setLocked:function(me){G=me},setClear:function(me,Ue,it,_t,Dt){Dt===!0&&(me*=_t,Ue*=_t,it*=_t),fe.set(me,Ue,it,_t),ie.equals(fe)===!1&&(i.clearColor(me,Ue,it,_t),ie.copy(fe))},reset:function(){G=!1,ne=null,ie.set(-1,0,0,0)}}}function t(){let G=!1,fe=null,ne=null,ie=null;return{setTest:function(me){me?Re(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(me){fe!==me&&!G&&(i.depthMask(me),fe=me)},setFunc:function(me){if(ne!==me){switch(me){case op:i.depthFunc(i.NEVER);break;case ap:i.depthFunc(i.ALWAYS);break;case lp:i.depthFunc(i.LESS);break;case Io:i.depthFunc(i.LEQUAL);break;case cp:i.depthFunc(i.EQUAL);break;case up:i.depthFunc(i.GEQUAL);break;case hp:i.depthFunc(i.GREATER);break;case dp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=me}},setLocked:function(me){G=me},setClear:function(me){ie!==me&&(i.clearDepth(me),ie=me)},reset:function(){G=!1,fe=null,ne=null,ie=null}}}function n(){let G=!1,fe=null,ne=null,ie=null,me=null,Ue=null,it=null,_t=null,Dt=null;return{setTest:function(lt){G||(lt?Re(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!G&&(i.stencilMask(lt),fe=lt)},setFunc:function(lt,Jt,Yt){(ne!==lt||ie!==Jt||me!==Yt)&&(i.stencilFunc(lt,Jt,Yt),ne=lt,ie=Jt,me=Yt)},setOp:function(lt,Jt,Yt){(Ue!==lt||it!==Jt||_t!==Yt)&&(i.stencilOp(lt,Jt,Yt),Ue=lt,it=Jt,_t=Yt)},setLocked:function(lt){G=lt},setClear:function(lt){Dt!==lt&&(i.clearStencil(lt),Dt=lt)},reset:function(){G=!1,fe=null,ne=null,ie=null,me=null,Ue=null,it=null,_t=null,Dt=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],_=null,v=!1,x=null,g=null,m=null,w=null,E=null,A=null,O=null,L=new Ne(0,0,0),I=0,V=!1,P=null,M=null,b=null,X=null,k=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,H=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),ee=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ee=H>=2);let Y=null,le={};const pe=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),ze=new Et().fromArray(pe),Je=new Et().fromArray(we);function te(G,fe,ne,ie){const me=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(G,Ue),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<ne;it++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(fe+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return Ue}const he={};he[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Re(i.DEPTH_TEST),s.setFunc(Io),ht(!1),Le(Sc),Re(i.CULL_FACE),tt(Li);function Re(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function Se(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Be(G,fe){return d[G]!==fe?(i.bindFramebuffer(G,fe),d[G]=fe,G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=fe),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Xe(G,fe){let ne=f,ie=!1;if(G){ne=h.get(fe),ne===void 0&&(ne=[],h.set(fe,ne));const me=G.textures;if(ne.length!==me.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,it=me.length;Ue<it;Ue++)ne[Ue]=i.COLOR_ATTACHMENT0+Ue;ne.length=me.length,ie=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ie=!0);ie&&i.drawBuffers(ne)}function et(G){return _!==G?(i.useProgram(G),_=G,!0):!1}const gt={[Wi]:i.FUNC_ADD,[Gf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};gt[Xf]=i.MIN,gt[jf]=i.MAX;const B={[Yf]:i.ZERO,[qf]:i.ONE,[Kf]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[tp]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[$f]:i.DST_ALPHA,[Zf]:i.ONE_MINUS_SRC_COLOR,[qa]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[Qf]:i.ONE_MINUS_DST_ALPHA,[np]:i.CONSTANT_COLOR,[ip]:i.ONE_MINUS_CONSTANT_COLOR,[rp]:i.CONSTANT_ALPHA,[sp]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(G,fe,ne,ie,me,Ue,it,_t,Dt,lt){if(G===Li){v===!0&&(Se(i.BLEND),v=!1);return}if(v===!1&&(Re(i.BLEND),v=!0),G!==kf){if(G!==x||lt!==V){if((g!==Wi||E!==Wi)&&(i.blendEquation(i.FUNC_ADD),g=Wi,E=Wi),lt)switch(G){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}m=null,w=null,A=null,O=null,L.set(0,0,0),I=0,x=G,V=lt}return}me=me||fe,Ue=Ue||ne,it=it||ie,(fe!==g||me!==E)&&(i.blendEquationSeparate(gt[fe],gt[me]),g=fe,E=me),(ne!==m||ie!==w||Ue!==A||it!==O)&&(i.blendFuncSeparate(B[ne],B[ie],B[Ue],B[it]),m=ne,w=ie,A=Ue,O=it),(_t.equals(L)===!1||Dt!==I)&&(i.blendColor(_t.r,_t.g,_t.b,Dt),L.copy(_t),I=Dt),x=G,V=!1}function je(G,fe){G.side===wn?Se(i.CULL_FACE):Re(i.CULL_FACE);let ne=G.side===hn;fe&&(ne=!ne),ht(ne),G.blending===Ur&&G.transparent===!1?tt(Li):tt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),r.setMask(G.colorWrite);const ie=G.stencilWrite;o.setTest(ie),ie&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ve(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){P!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),P=G)}function Le(G){G!==Hf?(Re(i.CULL_FACE),G!==M&&(G===Sc?i.cullFace(i.BACK):G===zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),M=G}function wt(G){G!==b&&(ee&&i.lineWidth(G),b=G)}function Ve(G,fe,ne){G?(Re(i.POLYGON_OFFSET_FILL),(X!==fe||k!==ne)&&(i.polygonOffset(fe,ne),X=fe,k=ne)):Se(i.POLYGON_OFFSET_FILL)}function Ye(G){G?Re(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function F(G){G===void 0&&(G=i.TEXTURE0+Z-1),Y!==G&&(i.activeTexture(G),Y=G)}function T(G,fe,ne){ne===void 0&&(Y===null?ne=i.TEXTURE0+Z-1:ne=Y);let ie=le[ne];ie===void 0&&(ie={type:void 0,texture:void 0},le[ne]=ie),(ie.type!==G||ie.texture!==fe)&&(Y!==ne&&(i.activeTexture(ne),Y=ne),i.bindTexture(G,fe||he[G]),ie.type=G,ie.texture=fe)}function J(){const G=le[Y];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(G){ze.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ze.copy(G))}function Ee(G){Je.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Je.copy(G))}function Ge(G,fe){let ne=l.get(fe);ne===void 0&&(ne=new WeakMap,l.set(fe,ne));let ie=ne.get(G);ie===void 0&&(ie=i.getUniformBlockIndex(fe,G.name),ne.set(G,ie))}function nt(G,fe){const ie=l.get(fe).get(G);a.get(fe)!==ie&&(i.uniformBlockBinding(fe,ie,G.__bindingPointIndex),a.set(fe,ie))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,le={},d={},h=new WeakMap,f=[],_=null,v=!1,x=null,g=null,m=null,w=null,E=null,A=null,O=null,L=new Ne(0,0,0),I=0,V=!1,P=null,M=null,b=null,X=null,k=null,ze.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Re,disable:Se,bindFramebuffer:Be,drawBuffers:Xe,useProgram:et,setBlending:tt,setMaterial:je,setFlipSided:ht,setCullFace:Le,setLineWidth:wt,setPolygonOffset:Ve,setScissorTest:Ye,activeTexture:F,bindTexture:T,unbindTexture:J,compressedTexImage2D:re,compressedTexImage3D:se,texImage2D:Me,texImage3D:st,updateUBOMapping:Ge,uniformBlockBinding:nt,texStorage2D:$e,texStorage3D:de,texSubImage2D:oe,texSubImage3D:Ce,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ae,scissor:Oe,viewport:Ee,reset:Mt}}function Mu(i,e,t,n){const r=K0(n);switch(t){case Xh:return i*e;case Yh:return i*e;case qh:return i*e*2;case Bl:return i*e/r.components*r.byteLength;case Hl:return i*e/r.components*r.byteLength;case Kh:return i*e*2/r.components*r.byteLength;case zl:return i*e*2/r.components*r.byteLength;case jh:return i*e*3/r.components*r.byteLength;case Rn:return i*e*4/r.components*r.byteLength;case Vl:return i*e*4/r.components*r.byteLength;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ao:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:case el:return Math.max(i,16)*Math.max(e,8)/4;case $a:case Ja:return Math.max(i,8)*Math.max(e,8)/2;case tl:case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ro:case vl:case xl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zh:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K0(i){switch(i){case hi:case kh:return{byteLength:1,components:1};case ws:case Gh:case Ls:return{byteLength:2,components:1};case Ol:case Fl:return{byteLength:2,components:4};case qi:case Nl:case Nn:return{byteLength:4,components:1};case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Z0(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Fe,d=new WeakMap;let h;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,T){return _?new OffscreenCanvas(F,T):Ps("canvas")}function x(F,T,J){let re=1;const se=Ye(F);if((se.width>J||se.height>J)&&(re=J/Math.max(se.width,se.height)),re<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const oe=Math.floor(re*se.width),Ce=Math.floor(re*se.height);h===void 0&&(h=v(oe,Ce));const xe=T?v(oe,Ce):h;return xe.width=oe,xe.height=Ce,xe.getContext("2d").drawImage(F,0,0,oe,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+oe+"x"+Ce+")."),xe}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),F;return F}function g(F){return F.generateMipmaps&&F.minFilter!==cn&&F.minFilter!==xn}function m(F){i.generateMipmap(F)}function w(F,T,J,re,se=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let oe=T;if(T===i.RED&&(J===i.FLOAT&&(oe=i.R32F),J===i.HALF_FLOAT&&(oe=i.R16F),J===i.UNSIGNED_BYTE&&(oe=i.R8)),T===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(oe=i.R8UI),J===i.UNSIGNED_SHORT&&(oe=i.R16UI),J===i.UNSIGNED_INT&&(oe=i.R32UI),J===i.BYTE&&(oe=i.R8I),J===i.SHORT&&(oe=i.R16I),J===i.INT&&(oe=i.R32I)),T===i.RG&&(J===i.FLOAT&&(oe=i.RG32F),J===i.HALF_FLOAT&&(oe=i.RG16F),J===i.UNSIGNED_BYTE&&(oe=i.RG8)),T===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(oe=i.RG8UI),J===i.UNSIGNED_SHORT&&(oe=i.RG16UI),J===i.UNSIGNED_INT&&(oe=i.RG32UI),J===i.BYTE&&(oe=i.RG8I),J===i.SHORT&&(oe=i.RG16I),J===i.INT&&(oe=i.RG32I)),T===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),T===i.RGBA){const Ce=se?Uo:pt.getTransfer(re);J===i.FLOAT&&(oe=i.RGBA32F),J===i.HALF_FLOAT&&(oe=i.RGBA16F),J===i.UNSIGNED_BYTE&&(oe=Ce===Ct?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function E(F,T){let J;return F?T===null||T===qi||T===kr?J=i.DEPTH24_STENCIL8:T===Nn?J=i.DEPTH32F_STENCIL8:T===ws&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qi||T===kr?J=i.DEPTH_COMPONENT24:T===Nn?J=i.DEPTH_COMPONENT32F:T===ws&&(J=i.DEPTH_COMPONENT16),J}function A(F,T){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==cn&&F.minFilter!==xn?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function O(F){const T=F.target;T.removeEventListener("dispose",O),I(T),T.isVideoTexture&&d.delete(T)}function L(F){const T=F.target;T.removeEventListener("dispose",L),P(T)}function I(F){const T=n.get(F);if(T.__webglInit===void 0)return;const J=F.source,re=f.get(J);if(re){const se=re[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&V(F),Object.keys(re).length===0&&f.delete(J)}n.remove(F)}function V(F){const T=n.get(F);i.deleteTexture(T.__webglTexture);const J=F.source,re=f.get(J);delete re[T.__cacheKey],o.memory.textures--}function P(F){const T=n.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(T.__webglFramebuffer[re]))for(let se=0;se<T.__webglFramebuffer[re].length;se++)i.deleteFramebuffer(T.__webglFramebuffer[re][se]);else i.deleteFramebuffer(T.__webglFramebuffer[re]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[re])}else{if(Array.isArray(T.__webglFramebuffer))for(let re=0;re<T.__webglFramebuffer.length;re++)i.deleteFramebuffer(T.__webglFramebuffer[re]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let re=0;re<T.__webglColorRenderbuffer.length;re++)T.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[re]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=F.textures;for(let re=0,se=J.length;re<se;re++){const oe=n.get(J[re]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(J[re])}n.remove(F)}let M=0;function b(){M=0}function X(){const F=M;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),M+=1,F}function k(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function Z(F,T){const J=n.get(F);if(F.isVideoTexture&&wt(F),F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){const re=F.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(J,F,T);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+T)}function ee(F,T){const J=n.get(F);if(F.version>0&&J.__version!==F.version){Je(J,F,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+T)}function H(F,T){const J=n.get(F);if(F.version>0&&J.__version!==F.version){Je(J,F,T);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+T)}function $(F,T){const J=n.get(F);if(F.version>0&&J.__version!==F.version){te(J,F,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+T)}const Y={[Vr]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Do]:i.MIRRORED_REPEAT},le={[cn]:i.NEAREST,[Vh]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[So]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},pe={[bp]:i.NEVER,[Up]:i.ALWAYS,[Pp]:i.LESS,[Qh]:i.LEQUAL,[Lp]:i.EQUAL,[Dp]:i.GEQUAL,[Cp]:i.GREATER,[Ip]:i.NOTEQUAL};function we(F,T){if(T.type===Nn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===xn||T.magFilter===So||T.magFilter===ys||T.magFilter===oi||T.minFilter===xn||T.minFilter===So||T.minFilter===ys||T.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Y[T.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Y[T.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Y[T.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,le[T.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,pe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===cn||T.minFilter!==ys&&T.minFilter!==oi||T.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ze(F,T){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",O));const re=T.source;let se=f.get(re);se===void 0&&(se={},f.set(re,se));const oe=k(T);if(oe!==F.__cacheKey){se[oe]===void 0&&(se[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),se[oe].usedTimes++;const Ce=se[F.__cacheKey];Ce!==void 0&&(se[F.__cacheKey].usedTimes--,Ce.usedTimes===0&&V(T)),F.__cacheKey=oe,F.__webglTexture=se[oe].texture}return J}function Je(F,T,J){let re=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(re=i.TEXTURE_3D);const se=ze(F,T),oe=T.source;t.bindTexture(re,F.__webglTexture,i.TEXTURE0+J);const Ce=n.get(oe);if(oe.version!==Ce.__version||se===!0){t.activeTexture(i.TEXTURE0+J);const xe=pt.getPrimaries(pt.workingColorSpace),Ae=T.colorSpace===Ri?null:pt.getPrimaries(T.colorSpace),$e=T.colorSpace===Ri||xe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let de=x(T.image,!1,r.maxTextureSize);de=Ve(T,de);const Me=s.convert(T.format,T.colorSpace),st=s.convert(T.type);let Oe=w(T.internalFormat,Me,st,T.colorSpace,T.isVideoTexture);we(re,T);let Ee;const Ge=T.mipmaps,nt=T.isVideoTexture!==!0,Mt=Ce.__version===void 0||se===!0,G=oe.dataReady,fe=A(T,de);if(T.isDepthTexture)Oe=E(T.format===Gr,T.type),Mt&&(nt?t.texStorage2D(i.TEXTURE_2D,1,Oe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Oe,de.width,de.height,0,Me,st,null));else if(T.isDataTexture)if(Ge.length>0){nt&&Mt&&t.texStorage2D(i.TEXTURE_2D,fe,Oe,Ge[0].width,Ge[0].height);for(let ne=0,ie=Ge.length;ne<ie;ne++)Ee=Ge[ne],nt?G&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,Me,st,Ee.data):t.texImage2D(i.TEXTURE_2D,ne,Oe,Ee.width,Ee.height,0,Me,st,Ee.data);T.generateMipmaps=!1}else nt?(Mt&&t.texStorage2D(i.TEXTURE_2D,fe,Oe,de.width,de.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Me,st,de.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,de.width,de.height,0,Me,st,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Oe,Ge[0].width,Ge[0].height,de.depth);for(let ne=0,ie=Ge.length;ne<ie;ne++)if(Ee=Ge[ne],T.format!==Rn)if(Me!==null)if(nt){if(G)if(T.layerUpdates.size>0){const me=Mu(Ee.width,Ee.height,T.format,T.type);for(const Ue of T.layerUpdates){const it=Ee.data.subarray(Ue*me/Ee.data.BYTES_PER_ELEMENT,(Ue+1)*me/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Ue,Ee.width,Ee.height,1,Me,it,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ee.width,Ee.height,de.depth,Me,Ee.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Oe,Ee.width,Ee.height,de.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ee.width,Ee.height,de.depth,Me,st,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Oe,Ee.width,Ee.height,de.depth,0,Me,st,Ee.data)}else{nt&&Mt&&t.texStorage2D(i.TEXTURE_2D,fe,Oe,Ge[0].width,Ge[0].height);for(let ne=0,ie=Ge.length;ne<ie;ne++)Ee=Ge[ne],T.format!==Rn?Me!==null?nt?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?G&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ee.width,Ee.height,Me,st,Ee.data):t.texImage2D(i.TEXTURE_2D,ne,Oe,Ee.width,Ee.height,0,Me,st,Ee.data)}else if(T.isDataArrayTexture)if(nt){if(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Oe,de.width,de.height,de.depth),G)if(T.layerUpdates.size>0){const ne=Mu(de.width,de.height,T.format,T.type);for(const ie of T.layerUpdates){const me=de.data.subarray(ie*ne/de.data.BYTES_PER_ELEMENT,(ie+1)*ne/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,de.width,de.height,1,Me,st,me)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Me,st,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,de.width,de.height,de.depth,0,Me,st,de.data);else if(T.isData3DTexture)nt?(Mt&&t.texStorage3D(i.TEXTURE_3D,fe,Oe,de.width,de.height,de.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Me,st,de.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,de.width,de.height,de.depth,0,Me,st,de.data);else if(T.isFramebufferTexture){if(Mt)if(nt)t.texStorage2D(i.TEXTURE_2D,fe,Oe,de.width,de.height);else{let ne=de.width,ie=de.height;for(let me=0;me<fe;me++)t.texImage2D(i.TEXTURE_2D,me,Oe,ne,ie,0,Me,st,null),ne>>=1,ie>>=1}}else if(Ge.length>0){if(nt&&Mt){const ne=Ye(Ge[0]);t.texStorage2D(i.TEXTURE_2D,fe,Oe,ne.width,ne.height)}for(let ne=0,ie=Ge.length;ne<ie;ne++)Ee=Ge[ne],nt?G&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Me,st,Ee):t.texImage2D(i.TEXTURE_2D,ne,Oe,Me,st,Ee);T.generateMipmaps=!1}else if(nt){if(Mt){const ne=Ye(de);t.texStorage2D(i.TEXTURE_2D,fe,Oe,ne.width,ne.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,st,de)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Me,st,de);g(T)&&m(re),Ce.__version=oe.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function te(F,T,J){if(T.image.length!==6)return;const re=ze(F,T),se=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+J);const oe=n.get(se);if(se.version!==oe.__version||re===!0){t.activeTexture(i.TEXTURE0+J);const Ce=pt.getPrimaries(pt.workingColorSpace),xe=T.colorSpace===Ri?null:pt.getPrimaries(T.colorSpace),Ae=T.colorSpace===Ri||Ce===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,de=T.image[0]&&T.image[0].isDataTexture,Me=[];for(let ie=0;ie<6;ie++)!$e&&!de?Me[ie]=x(T.image[ie],!0,r.maxCubemapSize):Me[ie]=de?T.image[ie].image:T.image[ie],Me[ie]=Ve(T,Me[ie]);const st=Me[0],Oe=s.convert(T.format,T.colorSpace),Ee=s.convert(T.type),Ge=w(T.internalFormat,Oe,Ee,T.colorSpace),nt=T.isVideoTexture!==!0,Mt=oe.__version===void 0||re===!0,G=se.dataReady;let fe=A(T,st);we(i.TEXTURE_CUBE_MAP,T);let ne;if($e){nt&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ge,st.width,st.height);for(let ie=0;ie<6;ie++){ne=Me[ie].mipmaps;for(let me=0;me<ne.length;me++){const Ue=ne[me];T.format!==Rn?Oe!==null?nt?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,0,0,Ue.width,Ue.height,Oe,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,Ge,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,0,0,Ue.width,Ue.height,Oe,Ee,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,Ge,Ue.width,Ue.height,0,Oe,Ee,Ue.data)}}}else{if(ne=T.mipmaps,nt&&Mt){ne.length>0&&fe++;const ie=Ye(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ge,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(de){nt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Me[ie].width,Me[ie].height,Oe,Ee,Me[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,Me[ie].width,Me[ie].height,0,Oe,Ee,Me[ie].data);for(let me=0;me<ne.length;me++){const it=ne[me].image[ie].image;nt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,0,0,it.width,it.height,Oe,Ee,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,Ge,it.width,it.height,0,Oe,Ee,it.data)}}else{nt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Oe,Ee,Me[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,Oe,Ee,Me[ie]);for(let me=0;me<ne.length;me++){const Ue=ne[me];nt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,0,0,Oe,Ee,Ue.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,Ge,Oe,Ee,Ue.image[ie])}}}g(T)&&m(i.TEXTURE_CUBE_MAP),oe.__version=se.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function he(F,T,J,re,se,oe){const Ce=s.convert(J.format,J.colorSpace),xe=s.convert(J.type),Ae=w(J.internalFormat,Ce,xe,J.colorSpace);if(!n.get(T).__hasExternalTextures){const de=Math.max(1,T.width>>oe),Me=Math.max(1,T.height>>oe);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,oe,Ae,de,Me,T.depth,0,Ce,xe,null):t.texImage2D(se,oe,Ae,de,Me,0,Ce,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Le(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,se,n.get(J).__webglTexture,0,ht(T)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,se,n.get(J).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(F,T,J){if(i.bindRenderbuffer(i.RENDERBUFFER,F),T.depthBuffer){const re=T.depthTexture,se=re&&re.isDepthTexture?re.type:null,oe=E(T.stencilBuffer,se),Ce=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=ht(T);Le(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,oe,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,oe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,oe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,F)}else{const re=T.textures;for(let se=0;se<re.length;se++){const oe=re[se],Ce=s.convert(oe.format,oe.colorSpace),xe=s.convert(oe.type),Ae=w(oe.internalFormat,Ce,xe,oe.colorSpace),$e=ht(T);J&&Le(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Ae,T.width,T.height):Le(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,Ae,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(F,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);const re=n.get(T.depthTexture).__webglTexture,se=ht(T);if(T.depthTexture.format===Nr)Le(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(T.depthTexture.format===Gr)Le(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Be(F){const T=n.get(F),J=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const re=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),re){const se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,re.removeEventListener("dispose",se)};re.addEventListener("dispose",se),T.__depthDisposeCallback=se}T.__boundDepthTexture=re}if(F.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Se(T.__webglFramebuffer,F)}else if(J){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]===void 0)T.__webglDepthbuffer[re]=i.createRenderbuffer(),Re(T.__webglDepthbuffer[re],F,!1);else{const se=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Re(T.__webglDepthbuffer,F,!1);else{const re=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(F,T,J){const re=n.get(F);T!==void 0&&he(re.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Be(F)}function et(F){const T=F.texture,J=n.get(F),re=n.get(T);F.addEventListener("dispose",L);const se=F.textures,oe=F.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=T.version,o.memory.textures++),oe){J.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)J.__webglFramebuffer[xe][Ae]=i.createFramebuffer()}else J.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let xe=0;xe<T.mipmaps.length;xe++)J.__webglFramebuffer[xe]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let xe=0,Ae=se.length;xe<Ae;xe++){const $e=n.get(se[xe]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Le(F)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let xe=0;xe<se.length;xe++){const Ae=se[xe];J.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[xe]);const $e=s.convert(Ae.format,Ae.colorSpace),de=s.convert(Ae.type),Me=w(Ae.internalFormat,$e,de,Ae.colorSpace,F.isXRRenderTarget===!0),st=ht(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Me,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,J.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(J.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),we(i.TEXTURE_CUBE_MAP,T);for(let xe=0;xe<6;xe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)he(J.__webglFramebuffer[xe][Ae],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else he(J.__webglFramebuffer[xe],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(T)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let xe=0,Ae=se.length;xe<Ae;xe++){const $e=se[xe],de=n.get($e);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),we(i.TEXTURE_2D,$e),he(J.__webglFramebuffer,F,$e,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),g($e)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(xe=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,re.__webglTexture),we(xe,T),T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)he(J.__webglFramebuffer[Ae],F,T,i.COLOR_ATTACHMENT0,xe,Ae);else he(J.__webglFramebuffer,F,T,i.COLOR_ATTACHMENT0,xe,0);g(T)&&m(xe),t.unbindTexture()}F.depthBuffer&&Be(F)}function gt(F){const T=F.textures;for(let J=0,re=T.length;J<re;J++){const se=T[J];if(g(se)){const oe=F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ce=n.get(se).__webglTexture;t.bindTexture(oe,Ce),m(oe),t.unbindTexture()}}}const B=[],tt=[];function je(F){if(F.samples>0){if(Le(F)===!1){const T=F.textures,J=F.width,re=F.height;let se=i.COLOR_BUFFER_BIT;const oe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(F),xe=T.length>1;if(xe)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const $e=n.get(T[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,J,re,0,0,J,re,se,i.NEAREST),l===!0&&(B.length=0,tt.length=0,B.push(i.COLOR_ATTACHMENT0+Ae),F.depthBuffer&&F.resolveDepthBuffer===!1&&(B.push(oe),tt.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const $e=n.get(T[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const T=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ht(F){return Math.min(r.maxSamples,F.samples)}function Le(F){const T=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function wt(F){const T=o.render.frame;d.get(F)!==T&&(d.set(F,T),F.update())}function Ve(F,T){const J=F.colorSpace,re=F.format,se=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==Qt&&J!==Ri&&(pt.getTransfer(J)===Ct?(re!==Rn||se!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function Ye(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=b,this.setTexture2D=Z,this.setTexture2DArray=ee,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Xe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Le}function $0(i,e){function t(n,r=Ri){let s;const o=pt.getTransfer(r);if(n===hi)return i.UNSIGNED_BYTE;if(n===Ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return i.BYTE;if(n===Gh)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Nl)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Ls)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===jh)return i.RGB;if(n===Rn)return i.RGBA;if(n===Yh)return i.LUMINANCE;if(n===qh)return i.LUMINANCE_ALPHA;if(n===Nr)return i.DEPTH_COMPONENT;if(n===Gr)return i.DEPTH_STENCIL;if(n===Bl)return i.RED;if(n===Hl)return i.RED_INTEGER;if(n===Kh)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Vl)return i.RGBA_INTEGER;if(n===Eo||n===To||n===Ao||n===wo)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Qa||n===Ja||n===el)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===nl||n===il)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===tl||n===nl)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===il)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===rl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ol)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===al)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===vl||n===xl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ro)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zh||n===yl||n===Ml||n===Sl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ro)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Q0 extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mn extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J0={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),m=this._getHandJoint(u,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),_=.02,v=.005;u.inputState.pinching&&f>_+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=_-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:ex,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new Wo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ix extends Zi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,h=null,f=null,_=null,v=null;const x=new nx,g=t.getContextAttributes();let m=null,w=null;const E=[],A=[],O=new Fe;let L=null;const I=new ln;I.layers.enable(1),I.viewport=new Et;const V=new ln;V.layers.enable(2),V.viewport=new Et;const P=[I,V],M=new Q0;M.layers.enable(1),M.layers.enable(2);let b=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=E[te];return he===void 0&&(he=new Ra,E[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=E[te];return he===void 0&&(he=new Ra,E[te]=he),he.getGripSpace()},this.getHand=function(te){let he=E[te];return he===void 0&&(he=new Ra,E[te]=he),he.getHandSpace()};function k(te){const he=A.indexOf(te.inputSource);if(he===-1)return;const Re=E[he];Re!==void 0&&(Re.update(te.inputSource,te.frame,u||o),Re.dispatchEvent({type:te.type,data:te.inputSource}))}function Z(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",ee);for(let te=0;te<E.length;te++){const he=A[te];he!==null&&(A[te]=null,E[te].disconnect(he))}b=null,X=null,x.reset(),e.setRenderTarget(m),_=null,f=null,h=null,r=null,w=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(te){u=te},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),w=new Ki(_.framebufferWidth,_.framebufferHeight,{format:Rn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,Re=null,Se=null;g.depth&&(Se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?Gr:Nr,Re=g.stencil?kr:qi);const Be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Ki(f.textureWidth,f.textureHeight,{format:Rn,type:hi,depthTexture:new dd(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(te){for(let he=0;he<te.removed.length;he++){const Re=te.removed[he],Se=A.indexOf(Re);Se>=0&&(A[Se]=null,E[Se].disconnect(Re))}for(let he=0;he<te.added.length;he++){const Re=te.added[he];let Se=A.indexOf(Re);if(Se===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=A.length){A.push(Re),Se=Xe;break}else if(A[Xe]===null){A[Xe]=Re,Se=Xe;break}if(Se===-1)break}const Be=E[Se];Be&&Be.connect(Re)}}const H=new U,$=new U;function Y(te,he,Re){H.setFromMatrixPosition(he.matrixWorld),$.setFromMatrixPosition(Re.matrixWorld);const Se=H.distanceTo($),Be=he.projectionMatrix.elements,Xe=Re.projectionMatrix.elements,et=Be[14]/(Be[10]-1),gt=Be[14]/(Be[10]+1),B=(Be[9]+1)/Be[5],tt=(Be[9]-1)/Be[5],je=(Be[8]-1)/Be[0],ht=(Xe[8]+1)/Xe[0],Le=et*je,wt=et*ht,Ve=Se/(-je+ht),Ye=Ve*-je;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ye),te.translateZ(Ve),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Be[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const F=et+Ve,T=gt+Ve,J=Le-Ye,re=wt+(Se-Ye),se=B*gt/T*F,oe=tt*gt/T*F;te.projectionMatrix.makePerspective(J,re,se,oe,F,T),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function le(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let he=te.near,Re=te.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),M.near=V.near=I.near=he,M.far=V.far=I.far=Re,(b!==M.near||X!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,X=M.far);const Se=te.parent,Be=M.cameras;le(M,Se);for(let Xe=0;Xe<Be.length;Xe++)le(Be[Xe],Se);Be.length===2?Y(M,I,V):M.projectionMatrix.copy(I.projectionMatrix),pe(te,M,Se)};function pe(te,he,Re){Re===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(Re.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Wr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let we=null;function ze(te,he){if(d=he.getViewerPose(u||o),v=he,d!==null){const Re=d.views;_!==null&&(e.setRenderTargetFramebuffer(w,_.framebuffer),e.setRenderTarget(w));let Se=!1;Re.length!==M.cameras.length&&(M.cameras.length=0,Se=!0);for(let Xe=0;Xe<Re.length;Xe++){const et=Re[Xe];let gt=null;if(_!==null)gt=_.getViewport(et);else{const tt=h.getViewSubImage(f,et);gt=tt.viewport,Xe===0&&(e.setRenderTargetTextures(w,tt.colorTexture,f.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(w))}let B=P[Xe];B===void 0&&(B=new ln,B.layers.enable(Xe),B.viewport=new Et,P[Xe]=B),B.matrix.fromArray(et.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(et.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(gt.x,gt.y,gt.width,gt.height),Xe===0&&(M.matrix.copy(B.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Se===!0&&M.cameras.push(B)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Xe=h.getDepthInformation(Re[0]);Xe&&Xe.isValid&&Xe.texture&&x.init(e,Xe,r.renderState)}}for(let Re=0;Re<E.length;Re++){const Se=A[Re],Be=E[Re];Se!==null&&Be!==void 0&&Be.update(Se,he,u||o)}we&&we(te,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),v=null}const Je=new hd;Je.setAnimationLoop(ze),this.setAnimationLoop=function(te){we=te},this.dispose=function(){}}}const Bi=new bn,rx=new Ze;function sx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ad(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,w,E,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),d(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&_(g,m,A)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,w,E):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=e.get(m),E=w.envMap,A=w.envMapRotation;E&&(g.envMap.value=E,Bi.copy(A),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),g.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(Bi)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function _(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ox(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const A=E.program;n.uniformBlockBinding(w,A)}function u(w,E){let A=r[w.id];A===void 0&&(v(w),A=d(w),r[w.id]=A,w.addEventListener("dispose",g));const O=E.program;n.updateUBOMapping(w,O);const L=e.render.frame;s[w.id]!==L&&(f(w),s[w.id]=L)}function d(w){const E=h();w.__bindingPointIndex=E;const A=i.createBuffer(),O=w.__size,L=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,O,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const E=r[w.id],A=w.uniforms,O=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let L=0,I=A.length;L<I;L++){const V=Array.isArray(A[L])?A[L]:[A[L]];for(let P=0,M=V.length;P<M;P++){const b=V[P];if(_(b,L,P,O)===!0){const X=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let Z=0;for(let ee=0;ee<k.length;ee++){const H=k[ee],$=x(H);typeof H=="number"||typeof H=="boolean"?(b.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,X+Z,b.__data)):H.isMatrix3?(b.__data[0]=H.elements[0],b.__data[1]=H.elements[1],b.__data[2]=H.elements[2],b.__data[3]=0,b.__data[4]=H.elements[3],b.__data[5]=H.elements[4],b.__data[6]=H.elements[5],b.__data[7]=0,b.__data[8]=H.elements[6],b.__data[9]=H.elements[7],b.__data[10]=H.elements[8],b.__data[11]=0):(H.toArray(b.__data,Z),Z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(w,E,A,O){const L=w.value,I=E+"_"+A;if(O[I]===void 0)return typeof L=="number"||typeof L=="boolean"?O[I]=L:O[I]=L.clone(),!0;{const V=O[I];if(typeof L=="number"||typeof L=="boolean"){if(V!==L)return O[I]=L,!0}else if(V.equals(L)===!1)return V.copy(L),!0}return!1}function v(w){const E=w.uniforms;let A=0;const O=16;for(let I=0,V=E.length;I<V;I++){const P=Array.isArray(E[I])?E[I]:[E[I]];for(let M=0,b=P.length;M<b;M++){const X=P[M],k=Array.isArray(X.value)?X.value:[X.value];for(let Z=0,ee=k.length;Z<ee;Z++){const H=k[Z],$=x(H),Y=A%O,le=Y%$.boundary,pe=Y+le;A+=le,pe!==0&&O-pe<$.storage&&(A+=O-pe),X.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=$.storage}}}const L=A%O;return L>0&&(A+=O-L),w.__size=A,w.__cache={},this}function x(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function g(w){const E=w.target;E.removeEventListener("dispose",g);const A=o.indexOf(E.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function m(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}class ax{constructor(e={}){const{canvas:t=Qp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),v=new Int32Array(4);let x=null,g=null;const m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=Ci,this.toneMappingExposure=1;const E=this;let A=!1,O=0,L=0,I=null,V=-1,P=null;const M=new Et,b=new Et;let X=null;const k=new Ne(0);let Z=0,ee=t.width,H=t.height,$=1,Y=null,le=null;const pe=new Et(0,0,ee,H),we=new Et(0,0,ee,H);let ze=!1;const Je=new Xl;let te=!1,he=!1;const Re=new Ze,Se=new U,Be=new Et,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function gt(){return I===null?$:1}let B=n;function tt(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yi}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",me,!1),B===null){const W="webgl2";if(B=tt(W,R),B===null)throw tt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let je,ht,Le,wt,Ve,Ye,F,T,J,re,se,oe,Ce,xe,Ae,$e,de,Me,st,Oe,Ee,Ge,nt,Mt;function G(){je=new fv(B),je.init(),Ge=new $0(B,je),ht=new av(B,je,e,Ge),Le=new q0(B),wt=new gv(B),Ve=new U0,Ye=new Z0(B,je,Le,Ve,ht,Ge,wt),F=new cv(E),T=new dv(E),J=new Em(B),nt=new sv(B,J),re=new pv(B,J,wt,nt),se=new vv(B,re,J,wt),st=new _v(B,ht,Ye),$e=new lv(Ve),oe=new D0(E,F,T,je,ht,nt,$e),Ce=new sx(E,Ve),xe=new O0,Ae=new k0(je),Me=new rv(E,F,T,Le,se,f,l),de=new Y0(E,se,ht),Mt=new ox(B,wt,ht,Le),Oe=new ov(B,je,wt),Ee=new mv(B,je,wt),wt.programs=oe.programs,E.capabilities=ht,E.extensions=je,E.properties=Ve,E.renderLists=xe,E.shadowMap=de,E.state=Le,E.info=wt}G();const fe=new ix(E,B);this.xr=fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(ee,H,!1))},this.getSize=function(R){return R.set(ee,H)},this.setSize=function(R,W,q=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=R,H=W,t.width=Math.floor(R*$),t.height=Math.floor(W*$),q===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(ee*$,H*$).floor()},this.setDrawingBufferSize=function(R,W,q){ee=R,H=W,$=q,t.width=Math.floor(R*q),t.height=Math.floor(W*q),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(pe)},this.setViewport=function(R,W,q,K){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,W,q,K),Le.viewport(M.copy(pe).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(we)},this.setScissor=function(R,W,q,K){R.isVector4?we.set(R.x,R.y,R.z,R.w):we.set(R,W,q,K),Le.scissor(b.copy(we).multiplyScalar($).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(R){Le.setScissorTest(ze=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(R=!0,W=!0,q=!0){let K=0;if(R){let j=!1;if(I!==null){const ce=I.texture.format;j=ce===Vl||ce===zl||ce===Hl}if(j){const ce=I.texture.type,ge=ce===hi||ce===qi||ce===ws||ce===kr||ce===Ol||ce===Fl,Te=Me.getClearColor(),be=Me.getClearAlpha(),He=Te.r,We=Te.g,Pe=Te.b;ge?(_[0]=He,_[1]=We,_[2]=Pe,_[3]=be,B.clearBufferuiv(B.COLOR,0,_)):(v[0]=He,v[1]=We,v[2]=Pe,v[3]=be,B.clearBufferiv(B.COLOR,0,v))}else K|=B.COLOR_BUFFER_BIT}W&&(K|=B.DEPTH_BUFFER_BIT),q&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",me,!1),xe.dispose(),Ae.dispose(),Ve.dispose(),F.dispose(),T.dispose(),se.dispose(),nt.dispose(),Mt.dispose(),oe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Yt),fe.removeEventListener("sessionend",Qi),qt.stop()};function ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=wt.autoReset,W=de.enabled,q=de.autoUpdate,K=de.needsUpdate,j=de.type;G(),wt.autoReset=R,de.enabled=W,de.autoUpdate=q,de.needsUpdate=K,de.type=j}function me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ue(R){const W=R.target;W.removeEventListener("dispose",Ue),it(W)}function it(R){_t(R),Ve.remove(R)}function _t(R){const W=Ve.get(R).programs;W!==void 0&&(W.forEach(function(q){oe.releaseProgram(q)}),R.isShaderMaterial&&oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,q,K,j,ce){W===null&&(W=Xe);const ge=j.isMesh&&j.matrixWorld.determinant()<0,Te=pi(R,W,q,K,j);Le.setMaterial(K,ge);let be=q.index,He=1;if(K.wireframe===!0){if(be=re.getWireframeAttribute(q),be===void 0)return;He=2}const We=q.drawRange,Pe=q.attributes.position;let rt=We.start*He,Pt=(We.start+We.count)*He;ce!==null&&(rt=Math.max(rt,ce.start*He),Pt=Math.min(Pt,(ce.start+ce.count)*He)),be!==null?(rt=Math.max(rt,0),Pt=Math.min(Pt,be.count)):Pe!=null&&(rt=Math.max(rt,0),Pt=Math.min(Pt,Pe.count));const Tt=Pt-rt;if(Tt<0||Tt===1/0)return;nt.setup(j,K,Te,q,be);let It,ut=Oe;if(be!==null&&(It=J.get(be),ut=Ee,ut.setIndex(It)),j.isMesh)K.wireframe===!0?(Le.setLineWidth(K.wireframeLinewidth*gt()),ut.setMode(B.LINES)):ut.setMode(B.TRIANGLES);else if(j.isLine){let Ie=K.linewidth;Ie===void 0&&(Ie=1),Le.setLineWidth(Ie*gt()),j.isLineSegments?ut.setMode(B.LINES):j.isLineLoop?ut.setMode(B.LINE_LOOP):ut.setMode(B.LINE_STRIP)}else j.isPoints?ut.setMode(B.POINTS):j.isSprite&&ut.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ut.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ie=j._multiDrawStarts,Ot=j._multiDrawCounts,dt=j._multiDrawCount,gn=be?J.get(be).bytesPerElement:1,gi=Ve.get(K).currentProgram.getUniforms();for(let en=0;en<dt;en++)gi.setValue(B,"_gl_DrawID",en),ut.render(Ie[en]/gn,Ot[en])}else if(j.isInstancedMesh)ut.renderInstances(rt,Tt,j.count);else if(q.isInstancedBufferGeometry){const Ie=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ot=Math.min(q.instanceCount,Ie);ut.renderInstances(rt,Tt,Ot)}else ut.render(rt,Tt)};function Dt(R,W,q){R.transparent===!0&&R.side===wn&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,Ht(R,W,q),R.side=ui,R.needsUpdate=!0,Ht(R,W,q),R.side=wn):Ht(R,W,q)}this.compile=function(R,W,q=null){q===null&&(q=R),g=Ae.get(q),g.init(W),w.push(g),q.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),R!==q&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const K=new Set;return R.traverse(function(j){const ce=j.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const Te=ce[ge];Dt(Te,q,j),K.add(Te)}else Dt(ce,q,j),K.add(ce)}),w.pop(),g=null,K},this.compileAsync=function(R,W,q=null){const K=this.compile(R,W,q);return new Promise(j=>{function ce(){if(K.forEach(function(ge){Ve.get(ge).currentProgram.isReady()&&K.delete(ge)}),K.size===0){j(R);return}setTimeout(ce,10)}je.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let lt=null;function Jt(R){lt&&lt(R)}function Yt(){qt.stop()}function Qi(){qt.start()}const qt=new hd;qt.setAnimationLoop(Jt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(R){lt=R,fe.setAnimationLoop(R),R===null?qt.stop():qt.start()},fe.addEventListener("sessionstart",Yt),fe.addEventListener("sessionend",Qi),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(W),W=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,W,I),g=Ae.get(R,w.length),g.init(W),w.push(g),Re.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Je.setFromProjectionMatrix(Re),he=this.localClippingEnabled,te=$e.init(this.clippingPlanes,he),x=xe.get(R,m.length),x.init(),m.push(x),fe.enabled===!0&&fe.isPresenting===!0){const ce=E.xr.getDepthSensingMesh();ce!==null&&Ii(ce,W,-1/0,E.sortObjects)}Ii(R,W,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(Y,le),et=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,et&&Me.addToRenderList(x,R),this.info.render.frame++,te===!0&&$e.beginShadows();const q=g.state.shadowsArray;de.render(q,R,W),te===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,j=x.transmissive;if(g.setupLights(),W.isArrayCamera){const ce=W.cameras;if(j.length>0)for(let ge=0,Te=ce.length;ge<Te;ge++){const be=ce[ge];yn(K,j,R,be)}et&&Me.render(R);for(let ge=0,Te=ce.length;ge<Te;ge++){const be=ce[ge];dn(x,R,be,be.viewport)}}else j.length>0&&yn(K,j,R,W),et&&Me.render(R),dn(x,R,W);I!==null&&(Ye.updateMultisampleRenderTarget(I),Ye.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(E,R,W),nt.resetDefaultState(),V=-1,P=null,w.pop(),w.length>0?(g=w[w.length-1],te===!0&&$e.setGlobalState(E.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Ii(R,W,q,K){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Je.intersectsSprite(R)){K&&Be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const ge=se.update(R),Te=R.material;Te.visible&&x.push(R,ge,Te,q,Be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Je.intersectsObject(R))){const ge=se.update(R),Te=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Be.copy(R.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Be.copy(ge.boundingSphere.center)),Be.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Te)){const be=ge.groups;for(let He=0,We=be.length;He<We;He++){const Pe=be[He],rt=Te[Pe.materialIndex];rt&&rt.visible&&x.push(R,ge,rt,q,Be.z,Pe)}}else Te.visible&&x.push(R,ge,Te,q,Be.z,null)}}const ce=R.children;for(let ge=0,Te=ce.length;ge<Te;ge++)Ii(ce[ge],W,q,K)}function dn(R,W,q,K){const j=R.opaque,ce=R.transmissive,ge=R.transparent;g.setupLightsView(q),te===!0&&$e.setGlobalState(E.clippingPlanes,q),K&&Le.viewport(M.copy(K)),j.length>0&&Kn(j,W,q),ce.length>0&&Kn(ce,W,q),ge.length>0&&Kn(ge,W,q),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function yn(R,W,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new Ki(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Ls:hi,minFilter:oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const ce=g.state.transmissionRenderTarget[K.id],ge=K.viewport||M;ce.setSize(ge.z,ge.w);const Te=E.getRenderTarget();E.setRenderTarget(ce),E.getClearColor(k),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),et&&Me.render(q);const be=E.toneMapping;E.toneMapping=Ci;const He=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),te===!0&&$e.setGlobalState(E.clippingPlanes,K),Kn(R,q,K),Ye.updateMultisampleRenderTarget(ce),Ye.updateRenderTargetMipmap(ce),je.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Pe=0,rt=W.length;Pe<rt;Pe++){const Pt=W[Pe],Tt=Pt.object,It=Pt.geometry,ut=Pt.material,Ie=Pt.group;if(ut.side===wn&&Tt.layers.test(K.layers)){const Ot=ut.side;ut.side=hn,ut.needsUpdate=!0,Rt(Tt,q,K,It,ut,Ie),ut.side=Ot,ut.needsUpdate=!0,We=!0}}We===!0&&(Ye.updateMultisampleRenderTarget(ce),Ye.updateRenderTargetMipmap(ce))}E.setRenderTarget(Te),E.setClearColor(k,Z),He!==void 0&&(K.viewport=He),E.toneMapping=be}function Kn(R,W,q){const K=W.isScene===!0?W.overrideMaterial:null;for(let j=0,ce=R.length;j<ce;j++){const ge=R[j],Te=ge.object,be=ge.geometry,He=K===null?ge.material:K,We=ge.group;Te.layers.test(q.layers)&&Rt(Te,W,q,be,He,We)}}function Rt(R,W,q,K,j,ce){R.onBeforeRender(E,W,q,K,j,ce),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(E,W,q,K,R,ce),j.transparent===!0&&j.side===wn&&j.forceSinglePass===!1?(j.side=hn,j.needsUpdate=!0,E.renderBufferDirect(q,W,K,j,R,ce),j.side=ui,j.needsUpdate=!0,E.renderBufferDirect(q,W,K,j,R,ce),j.side=wn):E.renderBufferDirect(q,W,K,j,R,ce),R.onAfterRender(E,W,q,K,j,ce)}function Ht(R,W,q){W.isScene!==!0&&(W=Xe);const K=Ve.get(R),j=g.state.lights,ce=g.state.shadowsArray,ge=j.state.version,Te=oe.getParameters(R,j.state,ce,W,q),be=oe.getProgramCacheKey(Te);let He=K.programs;K.environment=R.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(R.isMeshStandardMaterial?T:F).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",Ue),He=new Map,K.programs=He);let We=He.get(be);if(We!==void 0){if(K.currentProgram===We&&K.lightsStateVersion===ge)return Ji(R,Te),We}else Te.uniforms=oe.getUniforms(R),R.onBeforeCompile(Te,E),We=oe.acquireProgram(Te,be),He.set(be,We),K.uniforms=Te.uniforms;const Pe=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pe.clippingPlanes=$e.uniform),Ji(R,Te),K.needsLights=mi(R),K.lightsStateVersion=ge,K.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.directionalShadowMap.value=j.state.directionalShadowMap,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotShadowMap.value=j.state.spotShadowMap,Pe.spotLightMatrix.value=j.state.spotLightMatrix,Pe.spotLightMap.value=j.state.spotLightMap,Pe.pointShadowMap.value=j.state.pointShadowMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=We,K.uniformsList=null,We}function Zn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=bo.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Ji(R,W){const q=Ve.get(R);q.outputColorSpace=W.outputColorSpace,q.batching=W.batching,q.batchingColor=W.batchingColor,q.instancing=W.instancing,q.instancingColor=W.instancingColor,q.instancingMorph=W.instancingMorph,q.skinning=W.skinning,q.morphTargets=W.morphTargets,q.morphNormals=W.morphNormals,q.morphColors=W.morphColors,q.morphTargetsCount=W.morphTargetsCount,q.numClippingPlanes=W.numClippingPlanes,q.numIntersection=W.numClipIntersection,q.vertexAlphas=W.vertexAlphas,q.vertexTangents=W.vertexTangents,q.toneMapping=W.toneMapping}function pi(R,W,q,K,j){W.isScene!==!0&&(W=Xe),Ye.resetTextureUnits();const ce=W.fog,ge=K.isMeshStandardMaterial?W.environment:null,Te=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qt,be=(K.isMeshStandardMaterial?T:F).get(K.envMap||ge),He=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Pe=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,Pt=!!q.morphAttributes.color;let Tt=Ci;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Tt=E.toneMapping);const It=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=It!==void 0?It.length:0,Ie=Ve.get(K),Ot=g.state.lights;if(te===!0&&(he===!0||R!==P)){const rn=R===P&&K.id===V;$e.setState(K,R,rn)}let dt=!1;K.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Ot.state.version||Ie.outputColorSpace!==Te||j.isBatchedMesh&&Ie.batching===!1||!j.isBatchedMesh&&Ie.batching===!0||j.isBatchedMesh&&Ie.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ie.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ie.instancing===!1||!j.isInstancedMesh&&Ie.instancing===!0||j.isSkinnedMesh&&Ie.skinning===!1||!j.isSkinnedMesh&&Ie.skinning===!0||j.isInstancedMesh&&Ie.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ie.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ie.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ie.instancingMorph===!1&&j.morphTexture!==null||Ie.envMap!==be||K.fog===!0&&Ie.fog!==ce||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==$e.numPlanes||Ie.numIntersection!==$e.numIntersection)||Ie.vertexAlphas!==He||Ie.vertexTangents!==We||Ie.morphTargets!==Pe||Ie.morphNormals!==rt||Ie.morphColors!==Pt||Ie.toneMapping!==Tt||Ie.morphTargetsCount!==ut)&&(dt=!0):(dt=!0,Ie.__version=K.version);let gn=Ie.currentProgram;dt===!0&&(gn=Ht(K,W,j));let gi=!1,en=!1,tr=!1;const Ut=gn.getUniforms(),Pn=Ie.uniforms;if(Le.useProgram(gn.program)&&(gi=!0,en=!0,tr=!0),K.id!==V&&(V=K.id,en=!0),gi||P!==R){Ut.setValue(B,"projectionMatrix",R.projectionMatrix),Ut.setValue(B,"viewMatrix",R.matrixWorldInverse);const rn=Ut.map.cameraPosition;rn!==void 0&&rn.setValue(B,Se.setFromMatrixPosition(R.matrixWorld)),ht.logarithmicDepthBuffer&&Ut.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ut.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),P!==R&&(P=R,en=!0,tr=!0)}if(j.isSkinnedMesh){Ut.setOptional(B,j,"bindMatrix"),Ut.setOptional(B,j,"bindMatrixInverse");const rn=j.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ut.setValue(B,"boneTexture",rn.boneTexture,Ye))}j.isBatchedMesh&&(Ut.setOptional(B,j,"batchingTexture"),Ut.setValue(B,"batchingTexture",j._matricesTexture,Ye),Ut.setOptional(B,j,"batchingIdTexture"),Ut.setValue(B,"batchingIdTexture",j._indirectTexture,Ye),Ut.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Ut.setValue(B,"batchingColorTexture",j._colorsTexture,Ye));const Wt=q.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&st.update(j,q,gn),(en||Ie.receiveShadow!==j.receiveShadow)&&(Ie.receiveShadow=j.receiveShadow,Ut.setValue(B,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Pn.envMap.value=be,Pn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(Pn.envMapIntensity.value=W.environmentIntensity),en&&(Ut.setValue(B,"toneMappingExposure",E.toneMappingExposure),Ie.needsLights&&er(Pn,tr),ce&&K.fog===!0&&Ce.refreshFogUniforms(Pn,ce),Ce.refreshMaterialUniforms(Pn,K,$,H,g.state.transmissionRenderTarget[R.id]),bo.upload(B,Zn(Ie),Pn,Ye)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(bo.upload(B,Zn(Ie),Pn,Ye),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ut.setValue(B,"center",j.center),Ut.setValue(B,"modelViewMatrix",j.modelViewMatrix),Ut.setValue(B,"normalMatrix",j.normalMatrix),Ut.setValue(B,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const rn=K.uniformsGroups;for(let nr=0,ir=rn.length;nr<ir;nr++){const es=rn[nr];Mt.update(es,gn),Mt.bind(es,gn)}}return gn}function er(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function mi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,W,q){Ve.get(R.texture).__webglTexture=W,Ve.get(R.depthTexture).__webglTexture=q;const K=Ve.get(R);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const q=Ve.get(R);q.__webglFramebuffer=W,q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,q=0){I=R,O=W,L=q;let K=!0,j=null,ce=!1,ge=!1;if(R){const be=Ve.get(R);if(be.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(be.__webglFramebuffer===void 0)Ye.setupRenderTarget(R);else if(be.__hasExternalTextures)Ye.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Pe=R.depthTexture;if(be.__boundDepthTexture!==Pe){if(Pe!==null&&Ve.has(Pe)&&(R.width!==Pe.image.width||R.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(R)}}const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ge=!0);const We=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[W])?j=We[W][q]:j=We[W],ce=!0):R.samples>0&&Ye.useMultisampledRTT(R)===!1?j=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?j=We[q]:j=We,M.copy(R.viewport),b.copy(R.scissor),X=R.scissorTest}else M.copy(pe).multiplyScalar($).floor(),b.copy(we).multiplyScalar($).floor(),X=ze;if(Le.bindFramebuffer(B.FRAMEBUFFER,j)&&K&&Le.drawBuffers(R,j),Le.viewport(M),Le.scissor(b),Le.setScissorTest(X),ce){const be=Ve.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,be.__webglTexture,q)}else if(ge){const be=Ve.get(R.texture),He=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,be.__webglTexture,q||0,He)}V=-1},this.readRenderTargetPixels=function(R,W,q,K,j,ce,ge){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){Le.bindFramebuffer(B.FRAMEBUFFER,Te);try{const be=R.texture,He=be.format,We=be.type;if(!ht.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-K&&q>=0&&q<=R.height-j&&B.readPixels(W,q,K,j,Ge.convert(He),Ge.convert(We),ce)}finally{const be=I!==null?Ve.get(I).__webglFramebuffer:null;Le.bindFramebuffer(B.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(R,W,q,K,j,ce,ge){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){Le.bindFramebuffer(B.FRAMEBUFFER,Te);try{const be=R.texture,He=be.format,We=be.type;if(!ht.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-K&&q>=0&&q<=R.height-j){const Pe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Pe),B.bufferData(B.PIXEL_PACK_BUFFER,ce.byteLength,B.STREAM_READ),B.readPixels(W,q,K,j,Ge.convert(He),Ge.convert(We),0),B.flush();const rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);await Jp(B,rt,4);try{B.bindBuffer(B.PIXEL_PACK_BUFFER,Pe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ce)}finally{B.deleteBuffer(Pe),B.deleteSync(rt)}return ce}}finally{const be=I!==null?Ve.get(I).__webglFramebuffer:null;Le.bindFramebuffer(B.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(R,W=null,q=0){R.isTexture!==!0&&(Or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const K=Math.pow(2,-q),j=Math.floor(R.image.width*K),ce=Math.floor(R.image.height*K),ge=W!==null?W.x:0,Te=W!==null?W.y:0;Ye.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,ge,Te,j,ce),Le.unbindTexture()},this.copyTextureToTexture=function(R,W,q=null,K=null,j=0){R.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1],W=arguments[2],j=arguments[3]||0,q=null);let ce,ge,Te,be,He,We;q!==null?(ce=q.max.x-q.min.x,ge=q.max.y-q.min.y,Te=q.min.x,be=q.min.y):(ce=R.image.width,ge=R.image.height,Te=0,be=0),K!==null?(He=K.x,We=K.y):(He=0,We=0);const Pe=Ge.convert(W.format),rt=Ge.convert(W.type);Ye.setTexture2D(W,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Pt=B.getParameter(B.UNPACK_ROW_LENGTH),Tt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),It=B.getParameter(B.UNPACK_SKIP_PIXELS),ut=B.getParameter(B.UNPACK_SKIP_ROWS),Ie=B.getParameter(B.UNPACK_SKIP_IMAGES),Ot=R.isCompressedTexture?R.mipmaps[j]:R.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Te),B.pixelStorei(B.UNPACK_SKIP_ROWS,be),R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,j,He,We,ce,ge,Pe,rt,Ot.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,j,He,We,Ot.width,Ot.height,Pe,Ot.data):B.texSubImage2D(B.TEXTURE_2D,j,He,We,ce,ge,Pe,rt,Ot),B.pixelStorei(B.UNPACK_ROW_LENGTH,Pt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Tt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,It),B.pixelStorei(B.UNPACK_SKIP_ROWS,ut),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ie),j===0&&W.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(R,W,q=null,K=null,j=0){R.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,K=arguments[1]||null,R=arguments[2],W=arguments[3],j=arguments[4]||0);let ce,ge,Te,be,He,We,Pe,rt,Pt;const Tt=R.isCompressedTexture?R.mipmaps[j]:R.image;q!==null?(ce=q.max.x-q.min.x,ge=q.max.y-q.min.y,Te=q.max.z-q.min.z,be=q.min.x,He=q.min.y,We=q.min.z):(ce=Tt.width,ge=Tt.height,Te=Tt.depth,be=0,He=0,We=0),K!==null?(Pe=K.x,rt=K.y,Pt=K.z):(Pe=0,rt=0,Pt=0);const It=Ge.convert(W.format),ut=Ge.convert(W.type);let Ie;if(W.isData3DTexture)Ye.setTexture3D(W,0),Ie=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Ye.setTexture2DArray(W,0),Ie=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Ot=B.getParameter(B.UNPACK_ROW_LENGTH),dt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),gn=B.getParameter(B.UNPACK_SKIP_PIXELS),gi=B.getParameter(B.UNPACK_SKIP_ROWS),en=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Tt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Tt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,be),B.pixelStorei(B.UNPACK_SKIP_ROWS,He),B.pixelStorei(B.UNPACK_SKIP_IMAGES,We),R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Ie,j,Pe,rt,Pt,ce,ge,Te,It,ut,Tt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Ie,j,Pe,rt,Pt,ce,ge,Te,It,Tt.data):B.texSubImage3D(Ie,j,Pe,rt,Pt,ce,ge,Te,It,ut,Tt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,gn),B.pixelStorei(B.UNPACK_SKIP_ROWS,gi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,en),j===0&&W.generateMipmaps&&B.generateMipmap(Ie),Le.unbindTexture()},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&Ye.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ye.setTextureCube(R,0):R.isData3DTexture?Ye.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ye.setTexture2DArray(R,0):Ye.setTexture2D(R,0),Le.unbindTexture()},this.resetState=function(){O=0,L=0,I=null,Le.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gl?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Go?"display-p3":"srgb"}}class lx extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Or("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new U;class ql{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ql(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Su=new U,Eu=new Et,Tu=new Et,ux=new U,Au=new Ze,co=new U,ba=new jn,wu=new Ze,Pa=new Cs;class _d extends un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wc,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,co),this.boundingSphere.expandByPoint(co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(r),e.ray.intersectsSphere(ba)!==!1&&(wu.copy(r).invert(),Pa.copy(e.ray).applyMatrix4(wu),!(this.boundingBox!==null&&Pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Eu.fromBufferAttribute(r.attributes.skinIndex,e),Tu.fromBufferAttribute(r.attributes.skinWeight,e),Su.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Tu.getComponent(s);if(o!==0){const a=Eu.getComponent(s);Au.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ux.copy(Su).applyMatrix4(Au),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class vd extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xd extends jt{constructor(e=null,t=1,n=1,r,s,o,a,l,u=cn,d=cn,h,f){super(null,o,a,l,u,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ru=new Ze,hx=new Ze;class Ds{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:hx;Ru.multiplyMatrices(a,t[s]),Ru.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ds(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xd(t,e,e,Rn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new vd),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class wl extends vt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sr=new Ze,bu=new Ze,uo=[],Pu=new fi,dx=new Ze,us=new un,hs=new jn;class fx extends un{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,dx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),Pu.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(Pu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),hs.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),e.ray.intersectsSphere(hs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Sr),bu.multiplyMatrices(n,Sr),us.matrixWorld=bu,us.raycast(e,uo);for(let o=0,a=uo.length;o<a;o++){const l=uo[o];l.instanceId=s,l.object=this,t.push(l)}uo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new xd(new Float32Array(r*this.count),r,this.count,Bl,Nn));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $i extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bo=new U,Ho=new U,Lu=new Ze,ds=new Cs,ho=new jn,La=new U,Cu=new U;class jo extends At{constructor(e=new Gt,t=new $i){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Bo.fromBufferAttribute(t,r-1),Ho.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Bo.distanceTo(Ho);e.setAttribute("lineDistance",new Bn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),ho.radius+=s,e.ray.intersectsSphere(ho)===!1)return;Lu.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Lu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const _=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=_,g=v-1;x<g;x+=u){const m=d.getX(x),w=d.getX(x+1),E=fo(this,e,ds,l,m,w);E&&t.push(E)}if(this.isLineLoop){const x=d.getX(v-1),g=d.getX(_),m=fo(this,e,ds,l,x,g);m&&t.push(m)}}else{const _=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let x=_,g=v-1;x<g;x+=u){const m=fo(this,e,ds,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){const x=fo(this,e,ds,l,v-1,_);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fo(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(Bo.fromBufferAttribute(o,r),Ho.fromBufferAttribute(o,s),t.distanceSqToSegment(Bo,Ho,La,Cu)>n)return;La.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(La);if(!(l<e.near||l>e.far))return{distance:l,point:Cu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Iu=new U,Du=new U;class Us extends jo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Iu.fromBufferAttribute(t,r),Du.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Iu.distanceTo(Du);e.setAttribute("lineDistance",new Bn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class px extends jo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yd extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uu=new Ze,Rl=new Cs,po=new jn,mo=new U;class mx extends At{constructor(e=new Gt,t=new yd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;Uu.copy(r).invert(),Rl.copy(e.ray).applyMatrix4(Uu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=f,x=_;v<x;v++){const g=u.getX(v);mo.fromBufferAttribute(h,g),Nu(mo,g,l,r,e,t,this)}}else{const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=f,x=_;v<x;v++)mo.fromBufferAttribute(h,v),Nu(mo,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nu(i,e,t,n,r,s,o){const a=Rl.distanceSqToPoint(i);if(a<t){const l=new U;Rl.closestPointToPoint(i,l),l.applyMatrix4(n);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Kl extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends Kl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function go(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _x(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Ou(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Md(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Ns{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vx extends Ns{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:s=e,a=2*t-n;break;case Pc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:o=e,l=2*n-t;break;case Pc:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const u=(n-t)*.5,d=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,d=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,_=this._weightNext,v=(n-t)/(r-t),x=v*v,g=x*v,m=-f*g+2*f*x-f*v,w=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*v+1,E=(-1-_)*g+(1.5+_)*x+.5*v,A=_*g-_*x;for(let O=0;O!==a;++O)s[O]=m*o[d+O]+w*o[u+O]+E*o[l+O]+A*o[h+O];return s}}class xx extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,u=l-a,d=(n-t)/(r-t),h=1-d;for(let f=0;f!==a;++f)s[f]=o[u+f]*h+o[l+f]*d;return s}}class yx extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class qn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=go(t,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:go(e.times,Array),values:go(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case bs:t=this.InterpolantFactoryMethodLinear;break;case na:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return na}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&gx(r))for(let a=0,l=r.length;a!==l;++a){const u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===na,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const u=e[a],d=e[a+1];if(u!==d&&(a!==1||u!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,_=h+n;for(let v=0;v!==n;++v){const x=t[h+v];if(x!==t[f+v]||x!==t[_+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let _=0;_!==n;++_)t[f+_]=t[h+_]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,u=0;u!==n;++u)t[l+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=bs;class $r extends qn{constructor(e,t,n){super(e,t,n)}}$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Rs;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class Sd extends qn{}Sd.prototype.ValueTypeName="color";class jr extends qn{}jr.prototype.ValueTypeName="number";class Mx extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let u=e*a;for(let d=u+a;u!==d;u+=4)Qe.slerpFlat(s,0,o,u-a,o,u,l);return s}}class Yr extends qn{InterpolantFactoryMethodLinear(e){return new Mx(this.times,this.values,this.getValueSize(),e)}}Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qr extends qn{constructor(e,t,n){super(e,t,n)}}Qr.prototype.ValueTypeName="string";Qr.prototype.ValueBufferType=Array;Qr.prototype.DefaultInterpolation=Rs;Qr.prototype.InterpolantFactoryMethodLinear=void 0;Qr.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends qn{}qr.prototype.ValueTypeName="vector";class Sx{constructor(e="",t=-1,n=[],r=Ep){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Tx(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(qn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],u=[];l.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);const d=_x(l);l=Ou(l,1,d),u=Ou(u,1,d),!r&&l[0]===0&&(l.push(s),u.push(u[0])),o.push(new jr(".morphTargetInfluences["+t[a].name+"]",l,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const u=e[a],d=u.name.match(s);if(d&&d.length>1){const h=d[1];let f=r[h];f||(r[h]=f=[]),f.push(u)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,_,v,x){if(_.length!==0){const g=[],m=[];Md(_,g,m,v),g.length!==0&&x.push(new h(f,g,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let h=0;h<u.length;h++){const f=u[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const _={};let v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let x=0;x<f[v].morphTargets.length;x++)_[f[v].morphTargets[x]]=-1;for(const x in _){const g=[],m=[];for(let w=0;w!==f[v].morphTargets.length;++w){const E=f[v];g.push(E.time),m.push(E.morphTarget===x?1:0)}r.push(new jr(".morphTargetInfluence["+x+"]",g,m))}l=_.length*o}else{const _=".bones["+t[h].name+"]";n(qr,_+".position",f,"pos",r),n(Yr,_+".quaternion",f,"rot",r),n(qr,_+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ex(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jr;case"vector":case"vector2":case"vector3":case"vector4":return qr;case"color":return Sd;case"quaternion":return Yr;case"bool":case"boolean":return $r;case"string":return Qr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Tx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ex(i.type);if(i.times===void 0){const t=[],n=[];Md(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ax{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return u.push(d,h),this},this.removeHandler=function(d){const h=u.indexOf(d);return h!==-1&&u.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=u.length;h<f;h+=2){const _=u[h],v=u[h+1];if(_.global&&(_.lastIndex=0),_.test(d))return v}return null}}}const wx=new Ax;class Jr{constructor(e){this.manager=e!==void 0?e:wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class Rx extends Error{constructor(e,t){super(e),this.response=t}}class Ed extends Jr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:r});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const d=ni[e],h=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),_=f?parseInt(f):0,v=_!==0;let x=0;const g=new ReadableStream({start(m){w();function w(){h.read().then(({done:E,value:A})=>{if(E)m.close();else{x+=A.byteLength;const O=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:_});for(let L=0,I=d.length;L<I;L++){const V=d[L];V.onProgress&&V.onProgress(O)}m.enqueue(A),w()}},E=>{m.error(E)})}}});return new Response(g)}else throw new Rx(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return u.json();default:if(a===void 0)return u.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,_=new TextDecoder(f);return u.arrayBuffer().then(v=>_.decode(v))}}}).then(u=>{Pi.add(e,u);const d=ni[e];delete ni[e];for(let h=0,f=d.length;h<f;h++){const _=d[h];_.onLoad&&_.onLoad(u)}}).catch(u=>{const d=ni[e];if(d===void 0)throw this.manager.itemError(e),u;delete ni[e];for(let h=0,f=d.length;h<f;h++){const _=d[h];_.onError&&_.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Td extends Jr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ps("img");function l(){d(),Pi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(h){d(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class bx extends Jr{constructor(e){super(e)}load(e,t,n,r){const s=new jt,o=new Td(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Zl extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ca=new Ze,Fu=new U,Bu=new U;class $l{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fu),Bu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bu),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Px extends $l{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Wr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lx extends Zl{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Px}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hu=new Ze,fs=new U,Ia=new U;class Cx extends $l{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fs.setFromMatrixPosition(e.matrixWorld),n.position.copy(fs),Ia.copy(n.position),Ia.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ia),n.updateMatrixWorld(),r.makeTranslation(-fs.x,-fs.y,-fs.z),Hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu)}}class Ix extends Zl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Cx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Dx extends $l{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ad extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Dx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class As{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ux extends Jr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(u=>{t&&t(u),s.manager.itemEnd(e)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){return Pi.add(e,u),t&&t(u),s.manager.itemEnd(e),u}).catch(function(u){r&&r(u),Pi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Pi.add(e,l),s.manager.itemStart(e)}}class Nx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zu(){return(typeof performance>"u"?Date:performance).now()}const Ql="\\[\\]\\.:\\/",Ox=new RegExp("["+Ql+"]","g"),Jl="[^"+Ql+"]",Fx="[^"+Ql.replace("\\.","")+"]",Bx=/((?:WC+[\/:])*)/.source.replace("WC",Jl),Hx=/(WCOD+)?/.source.replace("WCOD",Fx),zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),Vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),kx=new RegExp("^"+Bx+Hx+zx+Vx+"$"),Gx=["material","materials","bones","map"];class Wx{constructor(e,t,n){const r=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class yt{constructor(e,t,n){this.path=t,this.parsedPath=n||yt.parseTrackName(t),this.node=yt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new yt.Composite(e,t,n):new yt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ox,"")}static parseTrackName(e){const t=kx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Gx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=yt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yt.Composite=Wx;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vu{constructor(e,t,n,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class ku{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xx extends Us{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Gt;r.setAttribute("position",new Bn(t,3)),r.setAttribute("color",new Bn(n,3));const s=new $i({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new Ne,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class jx extends Zi{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yi);/*!
 * @pixiv/three-vrm v3.1.2
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var _o=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(u){r(u)}},o=l=>{try{a(t.throw(l))}catch(u){r(u)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),mt=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(u){r(u)}},o=l=>{try{a(t.throw(l))}catch(u){r(u)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),Gu=class extends At{constructor(i){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${i}`,this.expressionName=i,this.type="VRMExpression",this.visible=!1}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.weight?1:0:this.overrideBlink==="blend"?this.weight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.weight?1:0:this.overrideLookAt==="blend"?this.weight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.weight?1:0:this.overrideMouth==="blend"?this.weight:0}addBind(i){this._binds.push(i)}applyWeight(i){var e;let t=this.isBinary?this.weight<=.5?0:1:this.weight;t*=(e=i==null?void 0:i.multiplier)!=null?e:1,this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(i=>i.clearAppliedWeight())}};function wd(i,e,t){var n,r;const s=i.parser.json,o=(n=s.nodes)==null?void 0:n[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const a=o.mesh;if(a==null)return null;const l=(r=s.meshes)==null?void 0:r[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;const u=l.primitives.length,d=[];return t.traverse(h=>{d.length<u&&h.isMesh&&d.push(h)}),d}function Wu(i,e){return mt(this,null,function*(){const t=yield i.parser.getDependency("node",e);return wd(i,e,t)})}function Xu(i){return mt(this,null,function*(){const e=yield i.parser.getDependencies("node"),t=new Map;return e.forEach((n,r)=>{const s=wd(i,r,n);s!=null&&t.set(r,s)}),t})}var bl={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Rd(i){return Math.max(Math.min(i,1),0)}var ju=class bd{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(bl));return Object.entries(this._expressionMap).forEach(([n,r])=>{t.has(n)&&(e[n]=r)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(bl));return Object.entries(this._expressionMap).forEach(([n,r])=>{t.has(n)||(e[n]=r)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new bd().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const n=this.getExpression(e);return(t=n==null?void 0:n.weight)!=null?t:null}setValue(e,t){const n=this.getExpression(e);n&&(n.weight=Rd(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1;const r=t.expressionName;this.blinkExpressionNames.indexOf(r)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(r)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(r)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(r=>{e-=r.overrideBlinkAmount,t-=r.overrideLookAtAmount,n-=r.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},ps={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},Yx={_Color:ps.Color,_EmissionColor:ps.EmissionColor,_ShadeColor:ps.ShadeColor,_RimColor:ps.RimColor,_OutlineColor:ps.OutlineColor},qx=new Ne,Pd=class Ld{constructor({material:e,type:t,targetValue:n,targetAlpha:r}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=r??1;const s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){const{color:t,alpha:n}=this._state;if(t!=null){const{propertyName:r,deltaValue:s}=t,o=this.material[r];o!=null&&o.add(qx.copy(s).multiplyScalar(e))}if(n!=null){const{propertyName:r,deltaValue:s}=n;this.material[r]!=null&&(this.material[r]+=s*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:n,initialValue:r}=e,s=this.material[n];s!=null&&s.copy(r)}if(t!=null){const{propertyName:n,initialValue:r}=t;this.material[n]!=null&&(this.material[n]=r)}}_initColorBindState(){var e,t,n;const{material:r,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(n=r.name)!=null?n:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;const d=r[l].clone(),h=new Ne(o.r-d.r,o.g-d.g,o.b-d.b);return{propertyName:l,initialValue:d,deltaValue:h}}_initAlphaBindState(){var e,t,n;const{material:r,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=r.name)!=null?n:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;const u=r[l],d=o-u;return{propertyName:l,initialValue:u,deltaValue:d}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(Ld._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};Pd._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Yu=Pd,qu=class{constructor({primitives:i,index:e,weight:t}){this.primitives=i,this.index=e,this.weight=t}applyWeight(i){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*i)})}clearAppliedWeight(){this.primitives.forEach(i=>{var e;((e=i.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(i.morphTargetInfluences[this.index]=0)})}},Ku=new Fe,Cd=class Id{constructor({material:e,scale:t,offset:n}){var r,s;this.material=e,this.scale=t,this.offset=n;const o=(r=Object.entries(Id._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:r[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!=null?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;const u=(l=e[a])==null?void 0:l.clone();if(!u)return null;e[a]=u;const d=u.offset.clone(),h=u.repeat.clone(),f=n.clone().sub(d),_=t.clone().sub(h);this._properties.push({name:a,initialOffset:d,deltaOffset:f,initialScale:h,deltaScale:_})}))}applyWeight(e){this._properties.forEach(t=>{const n=this.material[t.name];n!==void 0&&(n.offset.add(Ku.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(Ku.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};Cd._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var Zu=Cd,Kx=new Set(["1.0","1.0-beta"]),Dd=class Ud{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return mt(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return mt(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const n=yield this._v0Import(e);return n||null})}_v1Import(e){return mt(this,null,function*(){var t,n;const r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(n=r.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!Kx.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.expressions;if(!l)return null;const u=new Set(Object.values(bl)),d=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([f,_])=>{if(_!=null){if(!u.has(f)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${f}" detected. Ignoring the expression`);return}d.set(f,_)}}),l.custom!=null&&Object.entries(l.custom).forEach(([f,_])=>{if(u.has(f)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${f}". Ignoring the expression`);return}d.set(f,_)});const h=new ju;return yield Promise.all(Array.from(d.entries()).map(f=>mt(this,[f],function*([_,v]){var x,g,m,w,E,A,O;const L=new Gu(_);if(e.scene.add(L),L.isBinary=(x=v.isBinary)!=null?x:!1,L.overrideBlink=(g=v.overrideBlink)!=null?g:"none",L.overrideLookAt=(m=v.overrideLookAt)!=null?m:"none",L.overrideMouth=(w=v.overrideMouth)!=null?w:"none",(E=v.morphTargetBinds)==null||E.forEach(I=>mt(this,null,function*(){var V;if(I.node===void 0||I.index===void 0)return;const P=yield Wu(e,I.node),M=I.index;if(!P.every(b=>Array.isArray(b.morphTargetInfluences)&&M<b.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${v.name} attempts to index morph #${M} but not found.`);return}L.addBind(new qu({primitives:P,index:M,weight:(V=I.weight)!=null?V:1}))})),v.materialColorBinds||v.textureTransformBinds){const I=[];e.scene.traverse(V=>{const P=V.material;P&&I.push(P)}),(A=v.materialColorBinds)==null||A.forEach(V=>mt(this,null,function*(){I.filter(M=>{var b;const X=(b=this.parser.associations.get(M))==null?void 0:b.materials;return V.material===X}).forEach(M=>{L.addBind(new Yu({material:M,type:V.type,targetValue:new Ne().fromArray(V.targetValue),targetAlpha:V.targetValue[3]}))})})),(O=v.textureTransformBinds)==null||O.forEach(V=>mt(this,null,function*(){I.filter(M=>{var b;const X=(b=this.parser.associations.get(M))==null?void 0:b.materials;return V.material===X}).forEach(M=>{var b,X;L.addBind(new Zu({material:M,offset:new Fe().fromArray((b=V.offset)!=null?b:[0,0]),scale:new Fe().fromArray((X=V.scale)!=null?X:[1,1])}))})}))}h.registerExpression(L)}))),h})}_v0Import(e){return mt(this,null,function*(){var t;const n=this.parser.json,r=(t=n.extensions)==null?void 0:t.VRM;if(!r)return null;const s=r.blendShapeMaster;if(!s)return null;const o=new ju,a=s.blendShapeGroups;if(!a)return o;const l=new Set;return yield Promise.all(a.map(u=>mt(this,null,function*(){var d;const h=u.presetName,f=h!=null&&Ud.v0v1PresetNameMap[h]||null,_=f??u.name;if(_==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(_)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${h} has duplicated entries. Ignoring the expression`);return}l.add(_);const v=new Gu(_);e.scene.add(v),v.isBinary=(d=u.isBinary)!=null?d:!1,u.binds&&u.binds.forEach(g=>mt(this,null,function*(){var m;if(g.mesh===void 0||g.index===void 0)return;const w=[];(m=n.nodes)==null||m.forEach((A,O)=>{A.mesh===g.mesh&&w.push(O)});const E=g.index;yield Promise.all(w.map(A=>mt(this,null,function*(){var O;const L=yield Wu(e,A);if(!L.every(I=>Array.isArray(I.morphTargetInfluences)&&E<I.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${u.name} attempts to index ${E}th morph but not found.`);return}v.addBind(new qu({primitives:L,index:E,weight:.01*((O=g.weight)!=null?O:100)}))})))}));const x=u.materialValues;x&&x.length!==0&&x.forEach(g=>{if(g.materialName===void 0||g.propertyName===void 0||g.targetValue===void 0)return;const m=[];e.scene.traverse(E=>{if(E.material){const A=E.material;Array.isArray(A)?m.push(...A.filter(O=>(O.name===g.materialName||O.name===g.materialName+" (Outline)")&&m.indexOf(O)===-1)):A.name===g.materialName&&m.indexOf(A)===-1&&m.push(A)}});const w=g.propertyName;m.forEach(E=>{if(w==="_MainTex_ST"){const O=new Fe(g.targetValue[0],g.targetValue[1]),L=new Fe(g.targetValue[2],g.targetValue[3]);L.y=1-L.y-O.y,v.addBind(new Zu({material:E,scale:O,offset:L}));return}const A=Yx[w];if(A){v.addBind(new Yu({material:E,type:A,targetValue:new Ne().fromArray(g.targetValue),targetAlpha:g.targetValue[3]}));return}console.warn(w+" is not supported")})}),o.registerExpression(v)}))),o})}};Dd.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var Zx=Dd,ec=class Pr{constructor(e,t){this._firstPersonOnlyLayer=Pr.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Pr.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new Pr(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Pr.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=Pr.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(r=>{n.type==="firstPersonOnly"?(r.layers.set(this._firstPersonOnlyLayer),r.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(r.layers.set(this._thirdPersonOnlyLayer),r.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(r)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,r){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){const a=e[o],l=e[o+1],u=e[o+2],d=t[a],h=n[a];if(d[0]>0&&r.includes(h[0])||d[1]>0&&r.includes(h[1])||d[2]>0&&r.includes(h[2])||d[3]>0&&r.includes(h[3]))continue;const f=t[l],_=n[l];if(f[0]>0&&r.includes(_[0])||f[1]>0&&r.includes(_[1])||f[2]>0&&r.includes(_[2])||f[3]>0&&r.includes(_[3]))continue;const v=t[u],x=n[u];v[0]>0&&r.includes(x[0])||v[1]>0&&r.includes(x[1])||v[2]>0&&r.includes(x[2])||v[3]>0&&r.includes(x[3])||(e[s++]=a,e[s++]=l,e[s++]=u)}return s}_createErasedMesh(e,t){const n=new _d(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);const r=n.geometry,s=r.getAttribute("skinIndex"),o=s instanceof Vu?[]:s.array,a=[];for(let x=0;x<o.length;x+=4)a.push([o[x],o[x+1],o[x+2],o[x+3]]);const l=r.getAttribute("skinWeight"),u=l instanceof Vu?[]:l.array,d=[];for(let x=0;x<u.length;x+=4)d.push([u[x],u[x+1],u[x+2],u[x+3]]);const h=r.getIndex();if(!h)throw new Error("The geometry doesn't have an index buffer");const f=Array.from(h.array),_=this._excludeTriangles(f,d,a,t),v=[];for(let x=0;x<_;x++)v[x]=f[x];return r.setIndex(v),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new Ds(e.skeleton.bones,e.skeleton.boneInverses),new Ze),n}_createHeadlessModelForSkinnedMesh(e,t){const n=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&n.push(o)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const r=this._createErasedMesh(t,n);e.add(r)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new mn;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{const r=n;this._createHeadlessModelForSkinnedMesh(t,r)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};ec.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;ec.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var $u=ec,$x=new Set(["1.0","1.0-beta"]),Qx=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(i){this.parser=i}afterRoot(i){return mt(this,null,function*(){const e=i.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");i.userData.vrmFirstPerson=yield this._import(i,e)}})}_import(i,e){return mt(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(i,e);if(t)return t;const n=yield this._v0Import(i,e);return n||null})}_v1Import(i,e){return mt(this,null,function*(){var t,n;const r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(n=r.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!$x.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.firstPerson;if(!l)return null;const u=[],d=yield Xu(i);return Array.from(d.entries()).forEach(([h,f])=>{var _;const v=l.meshAnnotations?l.meshAnnotations.find(x=>x.node===h):void 0;u.push({meshes:f,type:(_=v==null?void 0:v.type)!=null?_:"both"})}),new $u(e,u)})}_v0Import(i,e){return mt(this,null,function*(){var t;const n=this.parser.json,r=(t=n.extensions)==null?void 0:t.VRM;if(!r)return null;const s=r.firstPerson;if(!s)return null;const o=[],a=yield Xu(i);return Array.from(a.entries()).forEach(([l,u])=>{const d=n.nodes[l],h=s.meshAnnotations?s.meshAnnotations.find(f=>f.mesh===d.mesh):void 0;o.push({meshes:u,type:this._convertV0FlagToV1Type(h==null?void 0:h.firstPersonFlag)})}),new $u(e,o)})}_convertV0FlagToV1Type(i){return i==="FirstPersonOnly"?"firstPersonOnly":i==="ThirdPersonOnly"?"thirdPersonOnly":i==="Auto"?"auto":"both"}},Qu=new U,Ju=new U,Jx=new Qe,eh=class extends mn{constructor(i){super(),this.vrmHumanoid=i,this._boneAxesMap=new Map,Object.values(i.humanBones).forEach(e=>{const t=new Xx(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(i=>{i.geometry.dispose(),i.material.dispose()})}updateMatrixWorld(i){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Qu,Jx,Ju);const n=Qu.set(.1,.1,.1).divide(Ju);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(i)}},Da=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],En={Hips:"hips",Spine:"spine",Chest:"chest",UpperChest:"upperChest",Neck:"neck",Head:"head",LeftEye:"leftEye",RightEye:"rightEye",Jaw:"jaw",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",LeftToes:"leftToes",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",RightToes:"rightToes",LeftShoulder:"leftShoulder",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightShoulder:"rightShoulder",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand",LeftThumbMetacarpal:"leftThumbMetacarpal",LeftThumbProximal:"leftThumbProximal",LeftThumbDistal:"leftThumbDistal",LeftIndexProximal:"leftIndexProximal",LeftIndexIntermediate:"leftIndexIntermediate",LeftIndexDistal:"leftIndexDistal",LeftMiddleProximal:"leftMiddleProximal",LeftMiddleIntermediate:"leftMiddleIntermediate",LeftMiddleDistal:"leftMiddleDistal",LeftRingProximal:"leftRingProximal",LeftRingIntermediate:"leftRingIntermediate",LeftRingDistal:"leftRingDistal",LeftLittleProximal:"leftLittleProximal",LeftLittleIntermediate:"leftLittleIntermediate",LeftLittleDistal:"leftLittleDistal",RightThumbMetacarpal:"rightThumbMetacarpal",RightThumbProximal:"rightThumbProximal",RightThumbDistal:"rightThumbDistal",RightIndexProximal:"rightIndexProximal",RightIndexIntermediate:"rightIndexIntermediate",RightIndexDistal:"rightIndexDistal",RightMiddleProximal:"rightMiddleProximal",RightMiddleIntermediate:"rightMiddleIntermediate",RightMiddleDistal:"rightMiddleDistal",RightRingProximal:"rightRingProximal",RightRingIntermediate:"rightRingIntermediate",RightRingDistal:"rightRingDistal",RightLittleProximal:"rightLittleProximal",RightLittleIntermediate:"rightLittleIntermediate",RightLittleDistal:"rightLittleDistal"},ey={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function Nd(i){return i.invert?i.invert():i.inverse(),i}var Hi=new U,zi=new Qe,Pl=class{constructor(i){this.humanBones=i,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const i={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);n&&(Hi.copy(n.position),zi.copy(n.quaternion),i[t]={position:Hi.toArray(),rotation:zi.toArray()})}),i}getPose(){const i={};return Object.keys(this.humanBones).forEach(e=>{const t=e,n=this.getBoneNode(t);if(!n)return;Hi.set(0,0,0),zi.identity();const r=this.restPose[t];r!=null&&r.position&&Hi.fromArray(r.position).negate(),r!=null&&r.rotation&&Nd(zi.fromArray(r.rotation)),Hi.add(n.position),zi.premultiply(n.quaternion),i[t]={position:Hi.toArray(),rotation:zi.toArray()}}),i}setPose(i){Object.entries(i).forEach(([e,t])=>{const n=e,r=this.getBoneNode(n);if(!r)return;const s=this.restPose[n];s&&(t!=null&&t.position&&(r.position.fromArray(t.position),s.position&&r.position.add(Hi.fromArray(s.position))),t!=null&&t.rotation&&(r.quaternion.fromArray(t.rotation),s.rotation&&r.quaternion.multiply(zi.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([i,e])=>{const t=this.getBoneNode(i);t&&(e!=null&&e.position&&t.position.fromArray(e.position),e!=null&&e.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(i){var e;return(e=this.humanBones[i])!=null?e:void 0}getBoneNode(i){var e,t;return(t=(e=this.humanBones[i])==null?void 0:e.node)!=null?t:null}},Ua=new U,ty=new Qe,ny=new U,th=class Od extends Pl{static _setupTransforms(e){const t=new At;t.name="VRMHumanoidRig";const n={},r={},s={};Da.forEach(a=>{var l;const u=e.getBoneNode(a);if(u){const d=new U,h=new Qe;u.updateWorldMatrix(!0,!1),u.matrixWorld.decompose(d,h,Ua),n[a]=d,r[a]=u.quaternion.clone();const f=new Qe;(l=u.parent)==null||l.matrixWorld.decompose(Ua,f,Ua),s[a]=f}});const o={};return Da.forEach(a=>{var l;const u=e.getBoneNode(a);if(u){const d=n[a];let h=a,f;for(;f==null&&(h=ey[h],h!=null);)f=n[h];const _=new At;_.name="Normalized_"+u.name,(h?(l=o[h])==null?void 0:l.node:t).add(_),_.position.copy(d),f&&_.position.sub(f),o[a]={node:_}}}),{rigBones:o,root:t,parentWorldRotations:s,boneRotations:r}}constructor(e){const{rigBones:t,root:n,parentWorldRotations:r,boneRotations:s}=Od._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=r,this._boneRotations=s}update(){Da.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const n=this.getBoneNode(e),r=this._parentWorldRotations[e],s=ty.copy(r).invert(),o=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(r).premultiply(s).multiply(o),e==="hips"){const a=n.getWorldPosition(ny);t.parent.updateWorldMatrix(!0,!1);const l=t.parent.matrixWorld,u=a.applyMatrix4(l.invert());t.position.copy(u)}}})}},nh=class Fd{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t==null?void 0:t.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new Pl(e),this._normalizedHumanBones=new th(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Pl(e.humanBones),this._normalizedHumanBones=new th(this._rawHumanBones),this}clone(){return new Fd(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},iy={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},ry=new Set(["1.0","1.0-beta"]),ih={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},sy=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e==null?void 0:e.helperRoot,this.autoUpdateHumanBones=e==null?void 0:e.autoUpdateHumanBones}afterRoot(i){return mt(this,null,function*(){i.userData.vrmHumanoid=yield this._import(i)})}_import(i){return mt(this,null,function*(){const e=yield this._v1Import(i);if(e)return e;const t=yield this._v0Import(i);return t||null})}_v1Import(i){return mt(this,null,function*(){var e,t;const n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const s=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!s)return null;const o=s.specVersion;if(!ry.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;const a=s.humanoid;if(!a)return null;const l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,u={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(h=>mt(this,[h],function*([f,_]){let v=f;const x=_.node;if(l){const m=ih[v];m!=null&&(v=m)}const g=yield this.parser.getDependency("node",x);if(g==null){console.warn(`A glTF node bound to the humanoid bone ${v} (index = ${x}) does not exist`);return}u[v]={node:g}}))));const d=new nh(this._ensureRequiredBonesExist(u),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(d.normalizedHumanBonesRoot),this.helperRoot){const h=new eh(d);this.helperRoot.add(h),h.renderOrder=this.helperRoot.renderOrder}return d})}_v0Import(i){return mt(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const r=n.humanoid;if(!r)return null;const s={};r.humanBones!=null&&(yield Promise.all(r.humanBones.map(a=>mt(this,null,function*(){const l=a.bone,u=a.node;if(l==null||u==null)return;const d=yield this.parser.getDependency("node",u);if(d==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${u}) does not exist`);return}const h=ih[l],f=h??l;if(s[f]!=null){console.warn(`Multiple bone entries for ${f} detected (index = ${u}), ignoring duplicated entries.`);return}s[f]={node:d}}))));const o=new nh(this._ensureRequiredBonesExist(s),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(i.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){const a=new eh(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(i){const e=Object.values(iy).filter(t=>i[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return i}},rh=class extends Gt{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new vt(new Float32Array(65*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new vt(new Uint16Array(3*63),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,i=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let i=0;i<64;i++){const e=i/63*this._currentTheta;this._attrPos.setXYZ(i+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<63;i++)this._attrIndex.setXYZ(i*3,0,i+1,i+2);this._attrIndex.needsUpdate=!0}},oy=class extends Gt{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new U,this._currentTail=new U,this._attrPos=new vt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new vt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,i=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},vo=new Qe,sh=new Qe,ms=new U,oh=new U,ah=Math.sqrt(2)/2,ay=new Qe(0,0,-ah,ah),ly=new U(0,1,0),cy=class extends mn{constructor(i){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=i;{const e=new rh;e.radius=.5;const t=new li({color:65280,transparent:!0,opacity:.5,side:wn,depthTest:!1,depthWrite:!1});this._meshPitch=new un(e,t),this.add(this._meshPitch)}{const e=new rh;e.radius=.5;const t=new li({color:16711680,transparent:!0,opacity:.5,side:wn,depthTest:!1,depthWrite:!1});this._meshYaw=new un(e,t),this.add(this._meshYaw)}{const e=new oy;e.radius=.1;const t=new $i({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Us(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(i){const e=Nt.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=Nt.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(ms),this.vrmLookAt.getLookAtWorldQuaternion(vo),vo.multiply(this.vrmLookAt.getFaceFrontQuaternion(sh)),this._meshYaw.position.copy(ms),this._meshYaw.quaternion.copy(vo),this._meshPitch.position.copy(ms),this._meshPitch.quaternion.copy(vo),this._meshPitch.quaternion.multiply(sh.setFromAxisAngle(ly,e)),this._meshPitch.quaternion.multiply(ay);const{target:n,autoUpdate:r}=this.vrmLookAt;n!=null&&r&&(n.getWorldPosition(oh).sub(ms),this._lineTarget.geometry.tail.copy(oh),this._lineTarget.geometry.update(),this._lineTarget.position.copy(ms)),super.updateMatrixWorld(i)}},uy=new U,hy=new U;function Ll(i,e){return i.matrixWorld.decompose(uy,e,hy),e}function Po(i){return[Math.atan2(-i.z,i.x),Math.atan2(i.y,Math.sqrt(i.x*i.x+i.z*i.z))]}function lh(i){const e=Math.round(i/2/Math.PI);return i-2*Math.PI*e}var ch=new U(0,0,1),dy=new U,fy=new U,py=new U,my=new Qe,Na=new Qe,uh=new Qe,gy=new Qe,Oa=new bn,Bd=class Hd{constructor(e,t){this.offsetFromHeadBone=new U,this.autoUpdate=!0,this.faceFront=new U(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new Qe)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new bn)}getEuler(e){return e.set(Nt.DEG2RAD*this._pitch,Nt.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new Hd(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return Ll(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(ch)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,n]=Po(this.faceFront);return Oa.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(Oa).premultiply(gy.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Na),this.getFaceFrontQuaternion(uh),e.copy(ch).applyQuaternion(Na).applyQuaternion(uh).applyEuler(this.getEuler(Oa))}lookAt(e){const t=my.copy(this._restHeadWorldQuaternion).multiply(Nd(this.getLookAtWorldQuaternion(Na))),n=this.getLookAtWorldPosition(fy),r=py.copy(e).sub(n).applyQuaternion(t).normalize(),[s,o]=Po(this.faceFront),[a,l]=Po(r),u=lh(a-s),d=lh(o-l);this._yaw=Nt.RAD2DEG*u,this._pitch=Nt.RAD2DEG*d,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(dy)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Bd.EULER_ORDER="YXZ";var _y=Bd,vy=new U(0,0,1),zn=new Qe,Er=new Qe,Tn=new bn(0,0,0,"YXZ"),Lo=class{constructor(i,e,t,n,r){this.humanoid=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=r,this.faceFront=new U(0,0,1),this._restQuatLeftEye=new Qe,this._restQuatRightEye=new Qe,this._restLeftEyeParentWorldQuat=new Qe,this._restRightEyeParentWorldQuat=new Qe;const s=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),Ll(s.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),Ll(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(i,e){const t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),r=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Tn.x=-Nt.DEG2RAD*this.rangeMapVerticalDown.map(-e):Tn.x=Nt.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?Tn.y=-Nt.DEG2RAD*this.rangeMapHorizontalInner.map(-i):Tn.y=Nt.DEG2RAD*this.rangeMapHorizontalOuter.map(i),zn.setFromEuler(Tn),this._getWorldFaceFrontQuat(Er),r.quaternion.copy(Er).multiply(zn).multiply(Er.invert()),zn.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(r.quaternion).multiply(zn).premultiply(zn.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?Tn.x=-Nt.DEG2RAD*this.rangeMapVerticalDown.map(-e):Tn.x=Nt.DEG2RAD*this.rangeMapVerticalUp.map(e),i<0?Tn.y=-Nt.DEG2RAD*this.rangeMapHorizontalOuter.map(-i):Tn.y=Nt.DEG2RAD*this.rangeMapHorizontalInner.map(i),zn.setFromEuler(Tn),this._getWorldFaceFrontQuat(Er),s.quaternion.copy(Er).multiply(zn).multiply(Er.invert()),zn.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(s.quaternion).multiply(zn).premultiply(zn.invert()).multiply(this._restQuatRightEye))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=Nt.RAD2DEG*i.y,t=Nt.RAD2DEG*i.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(i){if(this.faceFront.distanceToSquared(vy)<.01)return i.identity();const[e,t]=Po(this.faceFront);return Tn.set(0,.5*Math.PI+e,t,"YZX"),i.setFromEuler(Tn)}};Lo.type="bone";var Cl=class{constructor(i,e,t,n,r){this.expressions=i,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=r}applyYawPitch(i,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),i<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-i))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(i)))}lookAt(i){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=Nt.RAD2DEG*i.y,t=Nt.RAD2DEG*i.x;this.applyYawPitch(e,t)}};Cl.type="expression";var hh=class{constructor(i,e){this.inputMaxValue=i,this.outputScale=e}map(i){return this.outputScale*Rd(i/this.inputMaxValue)}},xy=new Set(["1.0","1.0-beta"]),xo=.01,yy=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(i,e){this.parser=i,this.helperRoot=e==null?void 0:e.helperRoot}afterRoot(i){return mt(this,null,function*(){const e=i.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=i.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");i.userData.vrmLookAt=yield this._import(i,e,t)}})}_import(i,e,t){return mt(this,null,function*(){if(e==null||t==null)return null;const n=yield this._v1Import(i,e,t);if(n)return n;const r=yield this._v0Import(i,e,t);return r||null})}_v1Import(i,e,t){return mt(this,null,function*(){var n,r,s;const o=this.parser.json;if(!(((n=o.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;const l=(r=o.extensions)==null?void 0:r.VRMC_vrm;if(!l)return null;const u=l.specVersion;if(!xy.has(u))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${u}"`),null;const d=l.lookAt;if(!d)return null;const h=d.type==="expression"?1:10,f=this._v1ImportRangeMap(d.rangeMapHorizontalInner,h),_=this._v1ImportRangeMap(d.rangeMapHorizontalOuter,h),v=this._v1ImportRangeMap(d.rangeMapVerticalDown,h),x=this._v1ImportRangeMap(d.rangeMapVerticalUp,h);let g;d.type==="expression"?g=new Cl(t,f,_,v,x):g=new Lo(e,f,_,v,x);const m=this._importLookAt(e,g);return m.offsetFromHeadBone.fromArray((s=d.offsetFromHeadBone)!=null?s:[0,.06,0]),m})}_v1ImportRangeMap(i,e){var t,n;let r=(t=i==null?void 0:i.inputMaxValue)!=null?t:90;const s=(n=i==null?void 0:i.outputScale)!=null?n:e;return r<xo&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),r=xo),new hh(r,s)}_v0Import(i,e,t){return mt(this,null,function*(){var n,r,s,o;const l=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!l)return null;const u=l.firstPerson;if(!u)return null;const d=u.lookAtTypeName==="BlendShape"?1:10,h=this._v0ImportDegreeMap(u.lookAtHorizontalInner,d),f=this._v0ImportDegreeMap(u.lookAtHorizontalOuter,d),_=this._v0ImportDegreeMap(u.lookAtVerticalDown,d),v=this._v0ImportDegreeMap(u.lookAtVerticalUp,d);let x;u.lookAtTypeName==="BlendShape"?x=new Cl(t,h,f,_,v):x=new Lo(e,h,f,_,v);const g=this._importLookAt(e,x);return u.firstPersonBoneOffset?g.offsetFromHeadBone.set((r=u.firstPersonBoneOffset.x)!=null?r:0,(s=u.firstPersonBoneOffset.y)!=null?s:.06,-((o=u.firstPersonBoneOffset.z)!=null?o:0)):g.offsetFromHeadBone.set(0,.06,0),g.faceFront.set(0,0,-1),x instanceof Lo&&x.faceFront.set(0,0,-1),g})}_v0ImportDegreeMap(i,e){var t,n;const r=i==null?void 0:i.curve;JSON.stringify(r)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let s=(t=i==null?void 0:i.xRange)!=null?t:90;const o=(n=i==null?void 0:i.yRange)!=null?n:e;return s<xo&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),s=xo),new hh(s,o)}_importLookAt(i,e){const t=new _y(i,e);if(this.helperRoot){const n=new cy(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function My(i,e){return typeof i!="string"||i===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(i)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(i)||/^data:.*,.*$/i.test(i)||/^blob:.*$/i.test(i)?i:e+i)}var Sy=new Set(["1.0","1.0-beta"]),Ey=class{get name(){return"VRMMetaLoaderPlugin"}constructor(i,e){var t,n,r;this.parser=i,this.needThumbnailImage=(t=e==null?void 0:e.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e==null?void 0:e.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(r=e==null?void 0:e.acceptV0Meta)!=null?r:!0}afterRoot(i){return mt(this,null,function*(){i.userData.vrmMeta=yield this._import(i)})}_import(i){return mt(this,null,function*(){const e=yield this._v1Import(i);if(e!=null)return e;const t=yield this._v0Import(i);return t??null})}_v1Import(i){return mt(this,null,function*(){var e,t,n;const r=this.parser.json;if(!(((e=r.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const o=(t=r.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;const a=o.specVersion;if(!Sy.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.meta;if(!l)return null;const u=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(u))throw new Error(`VRMMetaLoaderPlugin: The license url "${u}" is not accepted`);let h;return this.needThumbnailImage&&l.thumbnailImage!=null&&(h=(n=yield this._extractGLTFImage(l.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:h,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(i){return mt(this,null,function*(){var e;const n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;const r=n.meta;if(!r)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let s;return this.needThumbnailImage&&r.texture!=null&&r.texture!==-1&&(s=yield this.parser.getDependency("texture",r.texture)),{metaVersion:"0",allowedUserName:r.allowedUserName,author:r.author,commercialUssageName:r.commercialUssageName,contactInformation:r.contactInformation,licenseName:r.licenseName,otherLicenseUrl:r.otherLicenseUrl,otherPermissionUrl:r.otherPermissionUrl,reference:r.reference,sexualUssageName:r.sexualUssageName,texture:s??void 0,title:r.title,version:r.version,violentUssageName:r.violentUssageName}})}_extractGLTFImage(i){return mt(this,null,function*(){var e;const n=(e=this.parser.json.images)==null?void 0:e[i];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image doesn't exist`),null;let r=n.uri;if(n.bufferView!=null){const o=yield this.parser.getDependency("bufferView",n.bufferView),a=new Blob([o],{type:n.mimeType});r=URL.createObjectURL(a)}return r==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${i}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new Td().loadAsync(My(r,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},Ty=class{constructor(i){this.scene=i.scene,this.meta=i.meta,this.humanoid=i.humanoid,this.expressionManager=i.expressionManager,this.firstPerson=i.firstPerson,this.lookAt=i.lookAt}update(i){this.humanoid.update(),this.lookAt&&this.lookAt.update(i),this.expressionManager&&this.expressionManager.update()}},Ay=class extends Ty{constructor(i){super(i),this.materials=i.materials,this.springBoneManager=i.springBoneManager,this.nodeConstraintManager=i.nodeConstraintManager}update(i){super.update(i),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(i),this.materials&&this.materials.forEach(e=>{e.update&&e.update(i)})}},wy=Object.defineProperty,dh=Object.getOwnPropertySymbols,Ry=Object.prototype.hasOwnProperty,by=Object.prototype.propertyIsEnumerable,fh=(i,e,t)=>e in i?wy(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,ph=(i,e)=>{for(var t in e||(e={}))Ry.call(e,t)&&fh(i,t,e[t]);if(dh)for(var t of dh(e))by.call(e,t)&&fh(i,t,e[t]);return i},ji=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(u){r(u)}},o=l=>{try{a(t.throw(l))}catch(u){r(u)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),Py={"":3e3,srgb:3001};function Ly(i,e){parseInt(Yi,10)>=152?i.colorSpace=e:i.encoding=Py[e]}var Cy=class{get pending(){return Promise.all(this._pendings)}constructor(i,e){this._parser=i,this._materialParams=e,this._pendings=[]}assignPrimitive(i,e){e!=null&&(this._materialParams[i]=e)}assignColor(i,e,t){e!=null&&(this._materialParams[i]=new Ne().fromArray(e),t&&this._materialParams[i].convertSRGBToLinear())}assignTexture(i,e,t){return ji(this,null,function*(){const n=ji(this,null,function*(){e!=null&&(yield this._parser.assignTexture(this._materialParams,i,e),t&&Ly(this._materialParams[i],"srgb"))});return this._pendings.push(n),n})}assignTextureByIndex(i,e,t){return ji(this,null,function*(){return this.assignTexture(i,e!=null?{index:e}:void 0,t)})}},Iy=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,Dy=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,Uy={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},mh={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},Ny={3e3:"",3001:"srgb"};function Fa(i){return parseInt(Yi,10)>=152?i.colorSpace:Ny[i.encoding]}var Oy=class extends di{constructor(i={}){var e;super({vertexShader:Iy,fragmentShader:Dy}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=kl,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=Uy.None,this._outlineWidthMode=mh.None,this._isOutline=!1,i.transparentWithZWrite&&(i.depthWrite=!0),delete i.transparentWithZWrite,i.fog=!0,i.lights=!0,i.clipping=!0,this.uniforms=ld.merge([ve.common,ve.normalmap,ve.emissivemap,ve.fog,ve.lights,{litFactor:{value:new Ne(1,1,1)},mapUvTransform:{value:new ke},colorAlpha:{value:1},normalMapUvTransform:{value:new ke},shadeColorFactor:{value:new Ne(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new ke},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new ke},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new Ne(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new ke},parametricRimColorFactor:{value:new Ne(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new ke},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new Ne(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new ke},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new ke},outlineWidthFactor:{value:0},outlineColorFactor:{value:new Ne(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new ke},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=i.uniforms)!=null?e:{}]),this.setValues(i),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${Fa(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${Fa(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${Fa(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const n=parseInt(Yi,10),r=Object.entries(ph(ph({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=r+t.vertexShader,t.fragmentShader=r+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(i){this.uniforms.litFactor.value=i}get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}get normalMap(){return this.uniforms.normalMap.value}set normalMap(i){this.uniforms.normalMap.value=i}get normalScale(){return this.uniforms.normalScale.value}set normalScale(i){this.uniforms.normalScale.value=i}get emissive(){return this.uniforms.emissive.value}set emissive(i){this.uniforms.emissive.value=i}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(i){this.uniforms.emissiveIntensity.value=i}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(i){this.uniforms.emissiveMap.value=i}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(i){this.uniforms.shadeColorFactor.value=i}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(i){this.uniforms.shadeMultiplyTexture.value=i}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(i){this.uniforms.shadingShiftFactor.value=i}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(i){this.uniforms.shadingShiftTexture.value=i}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(i){this.uniforms.shadingShiftTextureScale.value=i}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(i){this.uniforms.shadingToonyFactor.value=i}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(i){this.uniforms.giEqualizationFactor.value=i}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(i){this.uniforms.matcapFactor.value=i}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(i){this.uniforms.matcapTexture.value=i}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(i){this.uniforms.parametricRimColorFactor.value=i}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(i){this.uniforms.rimMultiplyTexture.value=i}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(i){this.uniforms.rimLightingMixFactor.value=i}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(i){this.uniforms.parametricRimFresnelPowerFactor.value=i}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(i){this.uniforms.parametricRimLiftFactor.value=i}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(i){this.uniforms.outlineWidthMultiplyTexture.value=i}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(i){this.uniforms.outlineWidthFactor.value=i}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(i){this.uniforms.outlineColorFactor.value=i}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(i){this.uniforms.outlineLightingMixFactor.value=i}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(i){this.uniforms.uvAnimationMaskTexture.value=i}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(i){this.uniforms.uvAnimationScrollXOffset.value=i}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(i){this.uniforms.uvAnimationScrollYOffset.value=i}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(i){this.uniforms.uvAnimationRotationPhase.value=i}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(i){this._ignoreVertexColor=i,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(i){this._v0CompatShade=i,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(i){this._debugMode=i,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(i){this._outlineWidthMode=i,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(i){this._isOutline=i,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(i){this._uploadUniformsWorkaround(),this._updateUVAnimation(i)}copy(i){return super.copy(i),this.map=i.map,this.normalMap=i.normalMap,this.emissiveMap=i.emissiveMap,this.shadeMultiplyTexture=i.shadeMultiplyTexture,this.shadingShiftTexture=i.shadingShiftTexture,this.matcapTexture=i.matcapTexture,this.rimMultiplyTexture=i.rimMultiplyTexture,this.outlineWidthMultiplyTexture=i.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=i.uvAnimationMaskTexture,this.normalMapType=i.normalMapType,this.uvAnimationScrollXSpeedFactor=i.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=i.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=i.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=i.ignoreVertexColor,this.v0CompatShade=i.v0CompatShade,this.debugMode=i.debugMode,this.outlineWidthMode=i.outlineWidthMode,this.isOutline=i.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(i){this.uniforms.uvAnimationScrollXOffset.value+=i*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=i*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=i*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const i=parseInt(Yi,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:i,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===mh.ScreenCoordinates}}_updateTextureMatrix(i,e){i.value&&(i.value.matrixAutoUpdate&&i.value.updateMatrix(),e.value.copy(i.value.matrix))}},Fy=new Set(["1.0","1.0-beta"]),zd=class Co{get name(){return Co.EXTENSION_NAME}constructor(e,t={}){var n,r,s,o;this.parser=e,this.materialType=(n=t.materialType)!=null?n:Oy,this.renderOrderOffset=(r=t.renderOrderOffset)!=null?r:0,this.v0CompatShade=(s=t.v0CompatShade)!=null?s:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return ji(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return ji(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return ji(this,null,function*(){var t;const n=this.parser,s=(t=n.json.meshes)==null?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const o=s.primitives,a=yield n.loadMesh(e);if(o.length===1){const l=a,u=o[0].material;u!=null&&this._setupPrimitive(l,u)}else{const l=a;for(let u=0;u<o.length;u++){const d=l.children[u],h=o[u].material;h!=null&&this._setupPrimitive(d,h)}}return a})}_removeUnlitExtensionIfMToonExists(){const n=this.parser.json.materials;n==null||n.map((r,s)=>{var o;this._getMToonExtension(s)&&((o=r.extensions)!=null&&o.KHR_materials_unlit)&&delete r.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(n=o.extensions)==null?void 0:n[Co.EXTENSION_NAME];if(a==null)return;const l=a.specVersion;if(!Fy.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${Co.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return ji(this,null,function*(){var n;delete t.metalness,delete t.roughness;const r=new Cy(this.parser,t);r.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),r.assignColor("shadeColorFactor",e.shadeColorFactor),r.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),r.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),r.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),r.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),r.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),r.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),r.assignColor("matcapFactor",e.matcapFactor),r.assignTexture("matcapTexture",e.matcapTexture,!0),r.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),r.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),r.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),r.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),r.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),r.assignPrimitive("outlineWidthMode",e.outlineWidthMode),r.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),r.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),r.assignColor("outlineColorFactor",e.outlineColorFactor),r.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),r.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),r.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),r.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),r.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),r.assignPrimitive("v0CompatShade",this.v0CompatShade),r.assignPrimitive("debugMode",this.debugMode),yield r.pending})}_setupPrimitive(e,t){const n=this._getMToonExtension(t);if(n){const r=this._parseRenderOrder(n);e.renderOrder=r+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof Fn)||!this._shouldGenerateOutline(t))return;e.material=[t];const n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=hn,e.material.push(n);const r=e.geometry,s=r.index?r.index.count:r.attributes.position.count/3;r.addGroup(0,s,0),r.addGroup(0,s,1)}_addToMaterialSet(e){const t=e.material,n=new Set;Array.isArray(t)?t.forEach(r=>n.add(r)):n.add(t);for(const r of n)this._mToonMaterialSet.add(r)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};zd.EXTENSION_NAME="VRMC_materials_mtoon";var By=zd,Hy=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(u){r(u)}},o=l=>{try{a(t.throw(l))}catch(u){r(u)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),Vd=class Il{get name(){return Il.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return Hy(this,null,function*(){const n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const r=n.emissiveMultiplier;t.emissiveIntensity=r})}_getHDREmissiveMultiplierExtension(e){var t,n;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(n=o.extensions)==null?void 0:n[Il.EXTENSION_NAME];if(a!=null)return a}};Vd.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var zy=Vd,Vy=Object.defineProperty,ky=Object.defineProperties,Gy=Object.getOwnPropertyDescriptors,gh=Object.getOwnPropertySymbols,Wy=Object.prototype.hasOwnProperty,Xy=Object.prototype.propertyIsEnumerable,_h=(i,e,t)=>e in i?Vy(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Vn=(i,e)=>{for(var t in e||(e={}))Wy.call(e,t)&&_h(i,t,e[t]);if(gh)for(var t of gh(e))Xy.call(e,t)&&_h(i,t,e[t]);return i},vh=(i,e)=>ky(i,Gy(e)),jy=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(u){r(u)}},o=l=>{try{a(t.throw(l))}catch(u){r(u)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())});function Tr(i){return Math.pow(i,2.2)}var Yy=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(i){var e;this.parser=i,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return jy(this,null,function*(){var i;const e=this.parser.json,t=(i=e.extensions)==null?void 0:i.VRM,n=t==null?void 0:t.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((r,s)=>{var o,a;const l=(o=e.materials)==null?void 0:o[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(r.shader==="VRM/MToon"){const u=this._parseV0MToonProperties(r,l);e.materials[s]=u}else if((a=r.shader)!=null&&a.startsWith("VRM/Unlit")){const u=this._parseV0UnlitProperties(r,l);e.materials[s]=u}else r.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${r.shader}`)}))})}_parseV0MToonProperties(i,e){var t,n,r,s,o,a,l,u,d,h,f,_,v,x,g,m,w,E,A,O,L,I,V,P,M,b,X,k,Z,ee,H,$,Y,le,pe,we,ze,Je,te,he,Re,Se,Be,Xe,et,gt,B,tt,je,ht,Le,wt,Ve,Ye,F;const T=(n=(t=i.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,re=((r=i.floatProperties)==null?void 0:r._ZWrite)===1&&T,se=this._v0ParseRenderQueue(i),oe=(o=(s=i.keywordMap)==null?void 0:s._ALPHATEST_ON)!=null?o:!1,Ce=T?"BLEND":oe?"MASK":"OPAQUE",xe=oe?(l=(a=i.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,$e=((d=(u=i.floatProperties)==null?void 0:u._CullMode)!=null?d:2)===0,de=this._portTextureTransform(i),Me=((f=(h=i.vectorProperties)==null?void 0:h._Color)!=null?f:[1,1,1,1]).map((ge,Te)=>Te===3?ge:Tr(ge)),st=(_=i.textureProperties)==null?void 0:_._MainTex,Oe=st!=null?{index:st,extensions:Vn({},de)}:void 0,Ee=(x=(v=i.floatProperties)==null?void 0:v._BumpScale)!=null?x:1,Ge=(g=i.textureProperties)==null?void 0:g._BumpMap,nt=Ge!=null?{index:Ge,scale:Ee,extensions:Vn({},de)}:void 0,Mt=((w=(m=i.vectorProperties)==null?void 0:m._EmissionColor)!=null?w:[0,0,0,1]).map(Tr),G=(E=i.textureProperties)==null?void 0:E._EmissionMap,fe=G!=null?{index:G,extensions:Vn({},de)}:void 0,ne=((O=(A=i.vectorProperties)==null?void 0:A._ShadeColor)!=null?O:[.97,.81,.86,1]).map(Tr),ie=(L=i.textureProperties)==null?void 0:L._ShadeTexture,me=ie!=null?{index:ie,extensions:Vn({},de)}:void 0;let Ue=(V=(I=i.floatProperties)==null?void 0:I._ShadeShift)!=null?V:0,it=(M=(P=i.floatProperties)==null?void 0:P._ShadeToony)!=null?M:.9;it=Nt.lerp(it,1,.5+.5*Ue),Ue=-Ue-(1-it);const _t=(X=(b=i.floatProperties)==null?void 0:b._IndirectLightIntensity)!=null?X:.1,Dt=_t?1-_t:void 0,lt=(k=i.textureProperties)==null?void 0:k._SphereAdd,Jt=lt!=null?[1,1,1]:void 0,Yt=lt!=null?{index:lt}:void 0,Qi=(ee=(Z=i.floatProperties)==null?void 0:Z._RimLightingMix)!=null?ee:0,qt=(H=i.textureProperties)==null?void 0:H._RimTexture,Ii=qt!=null?{index:qt,extensions:Vn({},de)}:void 0,dn=((Y=($=i.vectorProperties)==null?void 0:$._RimColor)!=null?Y:[0,0,0,1]).map(Tr),yn=(pe=(le=i.floatProperties)==null?void 0:le._RimFresnelPower)!=null?pe:1,Kn=(ze=(we=i.floatProperties)==null?void 0:we._RimLift)!=null?ze:0,Rt=["none","worldCoordinates","screenCoordinates"][(te=(Je=i.floatProperties)==null?void 0:Je._OutlineWidthMode)!=null?te:0];let Ht=(Re=(he=i.floatProperties)==null?void 0:he._OutlineWidth)!=null?Re:0;Ht=.01*Ht;const Zn=(Se=i.textureProperties)==null?void 0:Se._OutlineWidthTexture,Ji=Zn!=null?{index:Zn,extensions:Vn({},de)}:void 0,pi=((Xe=(Be=i.vectorProperties)==null?void 0:Be._OutlineColor)!=null?Xe:[0,0,0]).map(Tr),mi=((gt=(et=i.floatProperties)==null?void 0:et._OutlineColorMode)!=null?gt:0)===1?(tt=(B=i.floatProperties)==null?void 0:B._OutlineLightingMix)!=null?tt:1:0,R=(je=i.textureProperties)==null?void 0:je._UvAnimMaskTexture,W=R!=null?{index:R,extensions:Vn({},de)}:void 0,q=(Le=(ht=i.floatProperties)==null?void 0:ht._UvAnimScrollX)!=null?Le:0;let K=(Ve=(wt=i.floatProperties)==null?void 0:wt._UvAnimScrollY)!=null?Ve:0;K!=null&&(K=-K);const j=(F=(Ye=i.floatProperties)==null?void 0:Ye._UvAnimRotation)!=null?F:0,ce={specVersion:"1.0",transparentWithZWrite:re,renderQueueOffsetNumber:se,shadeColorFactor:ne,shadeMultiplyTexture:me,shadingShiftFactor:Ue,shadingToonyFactor:it,giEqualizationFactor:Dt,matcapFactor:Jt,matcapTexture:Yt,rimLightingMixFactor:Qi,rimMultiplyTexture:Ii,parametricRimColorFactor:dn,parametricRimFresnelPowerFactor:yn,parametricRimLiftFactor:Kn,outlineWidthMode:Rt,outlineWidthFactor:Ht,outlineWidthMultiplyTexture:Ji,outlineColorFactor:pi,outlineLightingMixFactor:mi,uvAnimationMaskTexture:W,uvAnimationScrollXSpeedFactor:q,uvAnimationScrollYSpeedFactor:K,uvAnimationRotationSpeedFactor:j};return vh(Vn({},e),{pbrMetallicRoughness:{baseColorFactor:Me,baseColorTexture:Oe},normalTexture:nt,emissiveTexture:fe,emissiveFactor:Mt,alphaMode:Ce,alphaCutoff:xe,doubleSided:$e,extensions:{VRMC_materials_mtoon:ce}})}_parseV0UnlitProperties(i,e){var t,n,r,s,o;const a=i.shader==="VRM/UnlitTransparentZWrite",l=i.shader==="VRM/UnlitTransparent"||a,u=this._v0ParseRenderQueue(i),d=i.shader==="VRM/UnlitCutout",h=l?"BLEND":d?"MASK":"OPAQUE",f=d?(n=(t=i.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,_=this._portTextureTransform(i),v=((s=(r=i.vectorProperties)==null?void 0:r._Color)!=null?s:[1,1,1,1]).map(Tr),x=(o=i.textureProperties)==null?void 0:o._MainTex,g=x!=null?{index:x,extensions:Vn({},_)}:void 0,m={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:u,shadeColorFactor:v,shadeMultiplyTexture:g};return vh(Vn({},e),{pbrMetallicRoughness:{baseColorFactor:v,baseColorTexture:g},alphaMode:h,alphaCutoff:f,extensions:{VRMC_materials_mtoon:m}})}_portTextureTransform(i){var e,t,n,r,s;const o=(e=i.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};const a=[(t=o==null?void 0:o[0])!=null?t:0,(n=o==null?void 0:o[1])!=null?n:0],l=[(r=o==null?void 0:o[2])!=null?r:1,(s=o==null?void 0:o[3])!=null?s:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(i){var e,t;const n=i.shader==="VRM/UnlitTransparentZWrite",r=((e=i.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||n,s=((t=i.floatProperties)==null?void 0:t._ZWrite)===1||n;let o=0;if(r){const a=i.renderQueue;a!=null&&(s?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(i){const e=new Set,t=new Set;i.forEach(n=>{var r,s;const o=n.shader==="VRM/UnlitTransparentZWrite",a=((r=n.keywordMap)==null?void 0:r._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||o,l=((s=n.floatProperties)==null?void 0:s._ZWrite)===1||o;if(a){const u=n.renderQueue;u!=null&&(l?t.add(u):e.add(u))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,r)=>{const s=Math.min(Math.max(r-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,s)}),Array.from(t).sort().forEach((n,r)=>{const s=Math.min(Math.max(r,0),9);this._renderQueueMapTransparentZWrite.set(n,s)})}},xh=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(u){r(u)}},o=l=>{try{a(t.throw(l))}catch(u){r(u)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),Ti=new U,Ba=class extends mn{constructor(i){super(),this._attrPosition=new vt(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(Np);const e=new Gt;e.setAttribute("position",this._attrPosition);const t=new $i({color:16711935,depthTest:!1,depthWrite:!1});this._line=new jo(e,t),this.add(this._line),this.constraint=i}updateMatrixWorld(i){Ti.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,Ti.x,Ti.y,Ti.z),this.constraint.source&&Ti.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,Ti.x,Ti.y,Ti.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(i)}};function yh(i,e){return e.set(i.elements[12],i.elements[13],i.elements[14])}var qy=new U,Ky=new U;function Zy(i,e){return i.decompose(qy,e,Ky),e}function zo(i){return i.invert?i.invert():i.inverse(),i}var tc=class{constructor(i,e){this.destination=i,this.source=e,this.weight=1}},$y=new U,Qy=new U,Jy=new U,eM=new Qe,tM=new Qe,nM=new Qe,iM=class extends tc{get aimAxis(){return this._aimAxis}set aimAxis(i){this._aimAxis=i,this._v3AimAxis.set(i==="PositiveX"?1:i==="NegativeX"?-1:0,i==="PositiveY"?1:i==="NegativeY"?-1:0,i==="PositiveZ"?1:i==="NegativeZ"?-1:0)}get dependencies(){const i=new Set([this.source]);return this.destination.parent&&i.add(this.destination.parent),i}constructor(i,e){super(i,e),this._aimAxis="PositiveX",this._v3AimAxis=new U(1,0,0),this._dstRestQuat=new Qe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const i=eM.identity(),e=tM.identity();this.destination.parent&&(Zy(this.destination.parent.matrixWorld,i),zo(e.copy(i)));const t=$y.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(i),n=yh(this.source.matrixWorld,Qy).sub(yh(this.destination.matrixWorld,Jy)).normalize(),r=nM.setFromUnitVectors(t,n).premultiply(e).multiply(i).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(r,this.weight)}};function rM(i,e){const t=[i];let n=i.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(r=>{e(r)})}var sM=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(i){this._constraints.add(i);let e=this._objectConstraintsMap.get(i.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(i.destination,e)),e.add(i)}deleteConstraint(i){this._constraints.delete(i),this._objectConstraintsMap.get(i.destination).delete(i)}setInitState(){const i=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,i,e,n=>n.setInitState())}update(){const i=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,i,e,n=>n.update())}_processConstraint(i,e,t,n){if(t.has(i))return;if(e.has(i))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(i);const r=i.dependencies;for(const s of r)rM(s,o=>{const a=this._objectConstraintsMap.get(o);if(a)for(const l of a)this._processConstraint(l,e,t,n)});n(i),t.add(i)}},oM=new Qe,aM=new Qe,lM=class extends tc{get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._dstRestQuat=new Qe,this._invSrcRestQuat=new Qe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),zo(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const i=oM.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=aM.copy(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},cM=new U,uM=new Qe,hM=new Qe,dM=class extends tc{get rollAxis(){return this._rollAxis}set rollAxis(i){this._rollAxis=i,this._v3RollAxis.set(i==="X"?1:0,i==="Y"?1:0,i==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(i,e){super(i,e),this._rollAxis="X",this._v3RollAxis=new U(1,0,0),this._dstRestQuat=new Qe,this._invDstRestQuat=new Qe,this._invSrcRestQuatMulDstRestQuat=new Qe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),zo(this._invDstRestQuat.copy(this._dstRestQuat)),zo(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const i=uM.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=cM.copy(this._v3RollAxis).applyQuaternion(i),n=hM.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(i);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},fM=new Set(["1.0","1.0-beta"]),kd=class Ss{get name(){return Ss.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot}afterRoot(e){return xh(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return xh(this,null,function*(){var t;const n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(Ss.EXTENSION_NAME))!==-1))return null;const s=new sM,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var u;const d=n.nodes[l],h=(u=d==null?void 0:d.extensions)==null?void 0:u[Ss.EXTENSION_NAME];if(h==null)return;const f=h.specVersion;if(!fM.has(f)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${Ss.EXTENSION_NAME} specVersion "${f}"`);return}const _=h.constraint;if(_.roll!=null){const v=this._importRollConstraint(a,o,_.roll);s.addConstraint(v)}else if(_.aim!=null){const v=this._importAimConstraint(a,o,_.aim);s.addConstraint(v)}else if(_.rotation!=null){const v=this._importRotationConstraint(a,o,_.rotation);s.addConstraint(v)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,n){const{source:r,rollAxis:s,weight:o}=n,a=t[r],l=new dM(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){const u=new Ba(l);this.helperRoot.add(u)}return l}_importAimConstraint(e,t,n){const{source:r,aimAxis:s,weight:o}=n,a=t[r],l=new iM(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){const u=new Ba(l);this.helperRoot.add(u)}return l}_importRotationConstraint(e,t,n){const{source:r,weight:s}=n,o=t[r],a=new lM(e,o);if(s!=null&&(a.weight=s),this.helperRoot){const l=new Ba(a);this.helperRoot.add(l)}return a}};kd.EXTENSION_NAME="VRMC_node_constraint";var pM=kd,yo=(i,e,t)=>new Promise((n,r)=>{var s=l=>{try{a(t.next(l))}catch(u){r(u)}},o=l=>{try{a(t.throw(l))}catch(u){r(u)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(i,e)).next())}),nc=class{},Ha=new U,Vi=new U,Gd=class extends nc{get type(){return"capsule"}constructor(i){var e,t,n,r;super(),this.offset=(e=i==null?void 0:i.offset)!=null?e:new U(0,0,0),this.tail=(t=i==null?void 0:i.tail)!=null?t:new U(0,0,0),this.radius=(n=i==null?void 0:i.radius)!=null?n:0,this.inside=(r=i==null?void 0:i.inside)!=null?r:!1}calculateCollision(i,e,t,n){Ha.copy(this.offset).applyMatrix4(i),Vi.copy(this.tail).applyMatrix4(i),Vi.sub(Ha);const r=Vi.lengthSq();n.copy(e).sub(Ha);const s=Vi.dot(n);s<=0||(r<=s||Vi.multiplyScalar(s/r),n.sub(Vi));const o=this.inside?this.radius-t-n.length():n.length()-t-this.radius;return n.normalize(),this.inside&&n.negate(),o}},za=new U,Mh=new ke,Wd=class extends nc{get type(){return"plane"}constructor(i){var e,t;super(),this.offset=(e=i==null?void 0:i.offset)!=null?e:new U(0,0,0),this.normal=(t=i==null?void 0:i.normal)!=null?t:new U(0,0,1)}calculateCollision(i,e,t,n){n.copy(this.offset).applyMatrix4(i),n.negate().add(e),Mh.getNormalMatrix(i),za.copy(this.normal).applyNormalMatrix(Mh).normalize();const r=n.dot(za)-t;return n.copy(za),r}},Xd=class extends nc{get type(){return"sphere"}constructor(i){var e,t,n;super(),this.offset=(e=i==null?void 0:i.offset)!=null?e:new U(0,0,0),this.radius=(t=i==null?void 0:i.radius)!=null?t:0,this.inside=(n=i==null?void 0:i.inside)!=null?n:!1}calculateCollision(i,e,t,n){n.copy(this.offset).applyMatrix4(i),n.negate().add(e);const r=this.inside?this.radius-t-n.length():n.length()-t-this.radius;return n.normalize(),this.inside&&n.negate(),r}},kn=new U,mM=class extends Gt{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new U,this._currentTail=new U,this._shape=i,this._attrPos=new vt(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new vt(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0);const t=kn.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),i=!0),i&&this._buildPosition()}_buildPosition(){kn.copy(this._currentTail).sub(this._currentOffset);const i=kn.length()/this._currentRadius;for(let n=0;n<=16;n++){const r=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(r),-Math.cos(r),0),this._attrPos.setXYZ(17+n,i+Math.sin(r),Math.cos(r),0),this._attrPos.setXYZ(34+n,-Math.sin(r),0,-Math.cos(r)),this._attrPos.setXYZ(51+n,i+Math.sin(r),0,Math.cos(r))}for(let n=0;n<32;n++){const r=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(r),Math.cos(r)),this._attrPos.setXYZ(100+n,i,Math.sin(r),Math.cos(r))}const e=Math.atan2(kn.y,Math.sqrt(kn.x*kn.x+kn.z*kn.z)),t=-Math.atan2(kn.z,kn.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<34;i++){const e=(i+1)%34;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(68+i*2,34+i,34+e)}for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(136+i*2,68+i,68+e),this._attrIndex.setXY(200+i*2,100+i,100+e)}this._attrIndex.needsUpdate=!0}},gM=class extends Gt{constructor(i){super(),this.worldScale=1,this._currentOffset=new U,this._currentNormal=new U,this._shape=i,this._attrPos=new vt(new Float32Array(6*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new vt(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),i=!0),i&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},_M=class extends Gt{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new U,this._shape=i,this._attrPos=new vt(new Float32Array(32*3*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new vt(new Uint16Array(64*3),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.needsUpdate=!0}},vM=new U,Va=class extends mn{constructor(i){if(super(),this.matrixAutoUpdate=!1,this.collider=i,this.collider.shape instanceof Xd)this._geometry=new _M(this.collider.shape);else if(this.collider.shape instanceof Gd)this._geometry=new mM(this.collider.shape);else if(this.collider.shape instanceof Wd)this._geometry=new gM(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new $i({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Us(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=vM.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},xM=class extends Gt{constructor(i){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new U,this._springBone=i,this._attrPos=new vt(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new vt(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let i=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,i=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),i=!0),i&&this._buildPosition()}_buildPosition(){for(let i=0;i<32;i++){const e=i/16*Math.PI;this._attrPos.setXYZ(i,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+i,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+i,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let i=0;i<32;i++){const e=(i+1)%32;this._attrIndex.setXY(i*2,i,e),this._attrIndex.setXY(64+i*2,32+i,32+e),this._attrIndex.setXY(128+i*2,64+i,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},yM=new U,MM=class extends mn{constructor(i){super(),this.matrixAutoUpdate=!1,this.springBone=i,this._geometry=new xM(this.springBone);const e=new $i({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Us(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(i){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=yM.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(i)}},ka=class extends At{constructor(i){super(),this.shape=i}},SM=new Ze;function jd(i){return i.invert?i.invert():i.getInverse(SM.copy(i)),i}var EM=class{constructor(i){this._inverseCache=new Ze,this._shouldUpdateInverse=!0,this.matrix=i;const e={set:(t,n,r)=>(this._shouldUpdateInverse=!0,t[n]=r,!0)};this._originalElements=i.elements,i.elements=new Proxy(i.elements,e)}get inverse(){return this._shouldUpdateInverse&&(jd(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},TM=new Ze,ii=new U,gs=new U,AM=new U,Ar=new U,Sh=new U,_s=new U,Eh=new Qe,wr=new Ze,wM=new Ze,RM=class{constructor(i,e,t={},n=[]){this._currentTail=new U,this._prevTail=new U,this._boneAxis=new U,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new Ze,this._initialLocalRotation=new Qe,this._initialLocalChildPosition=new U;var r,s,o,a,l,u;this.bone=i,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(r=t.hitRadius)!=null?r:0,stiffness:(s=t.stiffness)!=null?s:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new U(0,-1,0),dragForce:(u=t.dragForce)!=null?u:.4},this.colliderGroups=n}get center(){return this._center}set center(i){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=i,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new EM(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:TM}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const i=this._getMatrixWorldToCenter(wr);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const i=this._getMatrixWorldToCenter(wr);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(i),this._prevTail.copy(this._currentTail)}update(i){if(i<=0)return;this._calcWorldSpaceBoneLength(),Ar.setFromMatrixPosition(this.bone.matrixWorld);let e=this._getMatrixWorldToCenter(wr);Sh.copy(Ar).applyMatrix4(e);const t=Eh.setFromRotationMatrix(e),n=wM.copy(e).multiply(this._parentMatrixWorld),r=gs.copy(this._boneAxis).applyMatrix4(this._initialLocalMatrix).applyMatrix4(n).sub(Sh).normalize(),s=AM.copy(this.settings.gravityDir).applyQuaternion(t).normalize(),o=this._getMatrixCenterToWorld(wr);_s.copy(this._currentTail).add(ii.copy(this._currentTail).sub(this._prevTail).multiplyScalar(1-this.settings.dragForce)).add(ii.copy(r).multiplyScalar(this.settings.stiffness*i)).add(ii.copy(s).multiplyScalar(this.settings.gravityPower*i)).applyMatrix4(o),_s.sub(Ar).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Ar),this._collision(_s),e=this._getMatrixWorldToCenter(wr),this._prevTail.copy(this._currentTail),this._currentTail.copy(ii.copy(_s).applyMatrix4(e));const a=jd(wr.copy(this._parentMatrixWorld).multiply(this._initialLocalMatrix)),l=Eh.setFromUnitVectors(this._boneAxis,ii.copy(_s).applyMatrix4(a).normalize());this.bone.quaternion.copy(this._initialLocalRotation).multiply(l),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(i){this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{const n=t.shape.calculateCollision(t.matrixWorld,i,this.settings.hitRadius,ii);n<0&&(i.add(ii.multiplyScalar(-n)),i.sub(Ar).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Ar))})})}_calcWorldSpaceBoneLength(){ii.setFromMatrixPosition(this.bone.matrixWorld),this.child?gs.setFromMatrixPosition(this.child.matrixWorld):(gs.copy(this._initialLocalChildPosition),gs.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=ii.sub(gs).length()}_getMatrixCenterToWorld(i){return this._center?i.copy(this._center.matrixWorld):i.identity(),i}_getMatrixWorldToCenter(i){return this._center?i.copy(this._center.userData.inverseCacheProxy.inverse):i.identity(),i}};function bM(i,e){const t=[];let n=i;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(r=>{e(r)})}function Yd(i,e){i.children.forEach(t=>{e(t)||Yd(t,e)})}var Th=class{constructor(){this._joints=new Set,this._hasWarnedCircularDependency=!1,this._objectSpringBonesMap=new Map}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const i=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{i.add(t)})}),Array.from(i)}get colliders(){const i=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{i.add(t)})}),Array.from(i)}addJoint(i){this._joints.add(i);let e=this._objectSpringBonesMap.get(i.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(i.bone,e)),e.add(i)}addSpringBone(i){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(i)}deleteJoint(i){this._joints.delete(i),this._objectSpringBonesMap.get(i.bone).delete(i)}deleteSpringBone(i){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(i)}setInitState(){const i=new Set,e=new Set,t=new Set;for(const n of this._joints)this._processSpringBone(n,i,e,t,r=>r.setInitState())}reset(){const i=new Set,e=new Set,t=new Set;for(const n of this._joints)this._processSpringBone(n,i,e,t,r=>r.reset())}update(i){const e=new Set,t=new Set,n=new Set;for(const r of this._joints)this._processSpringBone(r,e,t,n,s=>s.update(i)),Yd(r.bone,s=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(s))==null?void 0:o.size)!=null?a:0)>0?!0:(s.updateWorldMatrix(!1,!1),!1)})}_processSpringBone(i,e,t,n,r){if(t.has(i))return;if(e.has(i)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected while updating springbones"),this._hasWarnedCircularDependency=!0);return}e.add(i);const s=this._getDependencies(i);for(const o of s)bM(o,a=>{const l=this._objectSpringBonesMap.get(a);if(l)for(const u of l)this._processSpringBone(u,e,t,n,r);else n.has(a)||(a.updateWorldMatrix(!1,!1),n.add(a))});i.bone.updateMatrix(),i.bone.updateWorldMatrix(!1,!1),r(i),n.add(i.bone),t.add(i)}_getDependencies(i){const e=new Set,t=i.bone.parent;return t&&e.add(t),i.colliderGroups.forEach(n=>{n.colliders.forEach(r=>{e.add(r)})}),e}},Ah="VRMC_springBone_extended_collider",PM=new Set(["1.0","1.0-beta"]),LM=new Set(["1.0"]),qd=class Lr{get name(){return Lr.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t==null?void 0:t.jointHelperRoot,this.colliderHelperRoot=t==null?void 0:t.colliderHelperRoot,this.useExtendedColliders=(n=t==null?void 0:t.useExtendedColliders)!=null?n:!0}afterRoot(e){return yo(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return yo(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const n=yield this._v0Import(e);return n??null})}_v1Import(e){return yo(this,null,function*(){var t,n,r,s,o;const a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(Lr.EXTENSION_NAME))!==-1))return null;const u=new Th,d=yield e.parser.getDependencies("node"),h=(n=a.extensions)==null?void 0:n[Lr.EXTENSION_NAME];if(!h)return null;const f=h.specVersion;if(!PM.has(f))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Lr.EXTENSION_NAME} specVersion "${f}"`),null;const _=(r=h.colliders)==null?void 0:r.map((x,g)=>{var m,w,E,A,O,L,I,V,P,M,b,X,k,Z,ee;const H=d[x.node],$=x.shape,Y=(m=x.extensions)==null?void 0:m[Ah];if(this.useExtendedColliders&&Y!=null){const le=Y.specVersion;if(!LM.has(le))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Ah} specVersion "${le}". Fallbacking to the ${Lr.EXTENSION_NAME} definition`);else{const pe=Y.shape;if(pe.sphere)return this._importSphereCollider(H,{offset:new U().fromArray((w=pe.sphere.offset)!=null?w:[0,0,0]),radius:(E=pe.sphere.radius)!=null?E:0,inside:(A=pe.sphere.inside)!=null?A:!1});if(pe.capsule)return this._importCapsuleCollider(H,{offset:new U().fromArray((O=pe.capsule.offset)!=null?O:[0,0,0]),radius:(L=pe.capsule.radius)!=null?L:0,tail:new U().fromArray((I=pe.capsule.tail)!=null?I:[0,0,0]),inside:(V=pe.capsule.inside)!=null?V:!1});if(pe.plane)return this._importPlaneCollider(H,{offset:new U().fromArray((P=pe.plane.offset)!=null?P:[0,0,0]),normal:new U().fromArray((M=pe.plane.normal)!=null?M:[0,0,1])})}}if($.sphere)return this._importSphereCollider(H,{offset:new U().fromArray((b=$.sphere.offset)!=null?b:[0,0,0]),radius:(X=$.sphere.radius)!=null?X:0,inside:!1});if($.capsule)return this._importCapsuleCollider(H,{offset:new U().fromArray((k=$.capsule.offset)!=null?k:[0,0,0]),radius:(Z=$.capsule.radius)!=null?Z:0,tail:new U().fromArray((ee=$.capsule.tail)!=null?ee:[0,0,0]),inside:!1});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${g} has no valid shape`)}),v=(s=h.colliderGroups)==null?void 0:s.map((x,g)=>{var m;return{colliders:((m=x.colliders)!=null?m:[]).map(E=>{const A=_==null?void 0:_[E];if(A==null)throw new Error(`VRMSpringBoneLoaderPlugin: The colliderGroup #${g} attempted to use a collider #${E} but not found`);return A}),name:x.name}});return(o=h.springs)==null||o.forEach((x,g)=>{var m;const w=x.joints,E=(m=x.colliderGroups)==null?void 0:m.map(L=>{const I=v==null?void 0:v[L];if(I==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${g} attempted to use a colliderGroup ${L} but not found`);return I}),A=x.center!=null?d[x.center]:void 0;let O;w.forEach(L=>{if(O){const I=O.node,V=d[I],P=L.node,M=d[P],b={hitRadius:O.hitRadius,dragForce:O.dragForce,gravityPower:O.gravityPower,stiffness:O.stiffness,gravityDir:O.gravityDir!=null?new U().fromArray(O.gravityDir):void 0},X=this._importJoint(V,M,b,E);A&&(X.center=A),u.addJoint(X)}O=L})}),u.setInitState(),u})}_v0Import(e){return yo(this,null,function*(){var t,n,r;const s=e.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const a=(n=s.extensions)==null?void 0:n.VRM,l=a==null?void 0:a.secondaryAnimation;if(!l)return null;const u=l==null?void 0:l.boneGroups;if(!u)return null;const d=new Th,h=yield e.parser.getDependencies("node"),f=(r=l.colliderGroups)==null?void 0:r.map(_=>{var v;const x=h[_.node];return{colliders:((v=_.colliders)!=null?v:[]).map((m,w)=>{var E,A,O;const L=new U(0,0,0);return m.offset&&L.set((E=m.offset.x)!=null?E:0,(A=m.offset.y)!=null?A:0,m.offset.z?-m.offset.z:0),this._importSphereCollider(x,{offset:L,radius:(O=m.radius)!=null?O:0,inside:!1})})}});return u==null||u.forEach((_,v)=>{const x=_.bones;x&&x.forEach(g=>{var m,w,E,A;const O=h[g],L=new U;_.gravityDir?L.set((m=_.gravityDir.x)!=null?m:0,(w=_.gravityDir.y)!=null?w:0,(E=_.gravityDir.z)!=null?E:0):L.set(0,-1,0);const I=_.center!=null?h[_.center]:void 0,V={hitRadius:_.hitRadius,dragForce:_.dragForce,gravityPower:_.gravityPower,stiffness:_.stiffiness,gravityDir:L},P=(A=_.colliderGroups)==null?void 0:A.map(M=>{const b=f==null?void 0:f[M];if(b==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${v} attempted to use a colliderGroup ${M} but not found`);return b});O.traverse(M=>{var b;const X=(b=M.children[0])!=null?b:null,k=this._importJoint(M,X,V,P);I&&(k.center=I),d.addJoint(k)})})}),e.scene.updateMatrixWorld(),d.setInitState(),d})}_importJoint(e,t,n,r){const s=new RM(e,t,n,r);if(this.jointHelperRoot){const o=new MM(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){const n=new Xd(t),r=new ka(n);if(e.add(r),this.colliderHelperRoot){const s=new Va(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importCapsuleCollider(e,t){const n=new Gd(t),r=new ka(n);if(e.add(r),this.colliderHelperRoot){const s=new Va(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importPlaneCollider(e,t){const n=new Wd(t),r=new ka(n);if(e.add(r),this.colliderHelperRoot){const s=new Va(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}};qd.EXTENSION_NAME="VRMC_springBone";var CM=qd,IM=class{get name(){return"VRMLoaderPlugin"}constructor(i,e){var t,n,r,s,o,a,l,u,d,h;this.parser=i;const f=e==null?void 0:e.helperRoot,_=e==null?void 0:e.autoUpdateHumanBones;this.expressionPlugin=(t=e==null?void 0:e.expressionPlugin)!=null?t:new Zx(i),this.firstPersonPlugin=(n=e==null?void 0:e.firstPersonPlugin)!=null?n:new Qx(i),this.humanoidPlugin=(r=e==null?void 0:e.humanoidPlugin)!=null?r:new sy(i,{helperRoot:f,autoUpdateHumanBones:_}),this.lookAtPlugin=(s=e==null?void 0:e.lookAtPlugin)!=null?s:new yy(i,{helperRoot:f}),this.metaPlugin=(o=e==null?void 0:e.metaPlugin)!=null?o:new Ey(i),this.mtoonMaterialPlugin=(a=e==null?void 0:e.mtoonMaterialPlugin)!=null?a:new By(i),this.materialsHDREmissiveMultiplierPlugin=(l=e==null?void 0:e.materialsHDREmissiveMultiplierPlugin)!=null?l:new zy(i),this.materialsV0CompatPlugin=(u=e==null?void 0:e.materialsV0CompatPlugin)!=null?u:new Yy(i),this.springBonePlugin=(d=e==null?void 0:e.springBonePlugin)!=null?d:new CM(i,{colliderHelperRoot:f,jointHelperRoot:f}),this.nodeConstraintPlugin=(h=e==null?void 0:e.nodeConstraintPlugin)!=null?h:new pM(i,{helperRoot:f})}beforeRoot(){return _o(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(i){return _o(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(i)})}getMaterialType(i){const e=this.mtoonMaterialPlugin.getMaterialType(i);return e??null}extendMaterialParams(i,e){return _o(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(i,e),yield this.mtoonMaterialPlugin.extendMaterialParams(i,e)})}afterRoot(i){return _o(this,null,function*(){yield this.metaPlugin.afterRoot(i),yield this.humanoidPlugin.afterRoot(i),yield this.expressionPlugin.afterRoot(i),yield this.lookAtPlugin.afterRoot(i),yield this.firstPersonPlugin.afterRoot(i),yield this.springBonePlugin.afterRoot(i),yield this.nodeConstraintPlugin.afterRoot(i),yield this.mtoonMaterialPlugin.afterRoot(i);const e=i.userData.vrmMeta,t=i.userData.vrmHumanoid;if(e&&t){const n=new Ay({scene:i.scene,expressionManager:i.userData.vrmExpressionManager,firstPerson:i.userData.vrmFirstPerson,humanoid:t,lookAt:i.userData.vrmLookAt,meta:e,materials:i.userData.vrmMToonMaterials,springBoneManager:i.userData.vrmSpringBoneManager,nodeConstraintManager:i.userData.vrmNodeConstraintManager});i.userData.vrm=n}})}};function wh(i){if(Object.values(i).forEach(e=>{e!=null&&e.isTexture&&e.dispose()}),i.isShaderMaterial){const e=i.uniforms;e&&Object.values(e).forEach(t=>{const n=t.value;n!=null&&n.isTexture&&n.dispose()})}i.dispose()}function DM(i){const e=i.geometry;e&&e.dispose();const t=i.skeleton;t&&t.dispose();const n=i.material;n&&(Array.isArray(n)?n.forEach(r=>wh(r)):n&&wh(n))}function UM(i){i.traverse(DM)}function NM(i,e){var t;const n=(t=e==null?void 0:e.experimentalSameBoneCounts)!=null?t:!1,r=[];i.traverse(a=>{a.type==="SkinnedMesh"&&r.push(a)});const s=new Map;let o=0;for(const a of r){const u=a.geometry.getAttribute("skinIndex"),d=[],h=[],f={},_=u.array;for(let v=0;v<_.length;v++){const x=_[v];f[x]==null&&(f[x]=d.length,d.push(a.skeleton.bones[x]),h.push(a.skeleton.boneInverses[x])),_[v]=f[x]}u.copyArray(_),u.needsUpdate=!0,s.set(a,{bones:d,boneInverses:h}),o=Math.max(o,d.length)}for(const a of r){const{bones:l,boneInverses:u}=s.get(a);if(n)for(let h=l.length;h<o;h++)l[h]=l[0],u[h]=u[0];const d=new Ds(l,u);a.bind(d,new Ze)}}function OM(i){const e=new Map;i.traverse(t=>{var n,r,s,o;if(!t.isMesh)return;const a=t,l=a.geometry,u=l.index;if(u==null)return;const d=e.get(l);if(d!=null){a.geometry=d;return}const h=new Gt;h.name=l.name,h.morphTargetsRelative=l.morphTargetsRelative,l.groups.forEach(x=>{h.addGroup(x.start,x.count,x.materialIndex)}),h.boundingBox=(r=(n=l.boundingBox)==null?void 0:n.clone())!=null?r:null,h.boundingSphere=(o=(s=l.boundingSphere)==null?void 0:s.clone())!=null?o:null,h.setDrawRange(l.drawRange.start,l.drawRange.count),h.userData=l.userData,e.set(l,h);const f=[],_=[];{const x=u.array,g=new x.constructor(x.length);let m=0;for(let w=0;w<x.length;w++){const E=x[w];let A=f[E];A==null&&(f[E]=m,_[m]=E,A=m,m++),g[w]=A}h.setIndex(new vt(g,1,!1))}Object.keys(l.attributes).forEach(x=>{const g=l.attributes[x];if(g.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const m=g.array,{itemSize:w,normalized:E}=g,A=new m.constructor(_.length*w);_.forEach((O,L)=>{for(let I=0;I<w;I++)A[L*w+I]=m[O*w+I]}),h.setAttribute(x,new vt(A,w,E))});let v=!0;Object.keys(l.morphAttributes).forEach(x=>{h.morphAttributes[x]=[];const g=l.morphAttributes[x];for(let m=0;m<g.length;m++){const w=g[m];if(w.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");const E=w.array,{itemSize:A,normalized:O}=w,L=new E.constructor(_.length*A);_.forEach((I,V)=>{for(let P=0;P<A;P++)L[V*A+P]=E[I*A+P]}),v=v&&L.every(I=>I===0),h.morphAttributes[x][m]=new vt(L,A,O)}}),v&&(h.morphAttributes={}),a.geometry=h}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function FM(i){var e;((e=i.meta)==null?void 0:e.metaVersion)==="0"&&(i.scene.rotation.y=Math.PI)}var Os=class{constructor(){}};Os.deepDispose=UM;Os.removeUnnecessaryJoints=NM;Os.removeUnnecessaryVertices=OM;Os.rotateVRM0=FM;/*!
 * @pixiv/three-vrm-core v3.1.2
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-mtoon v3.1.2
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.1.2
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-v0compat v3.1.2
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-node-constraint v3.1.2
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-springbone v3.1.2
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2024 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */function Rh(i,e){if(e===Tp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===El||e===$h){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===El)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class BM extends Jr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new GM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new iS(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=As.extractUrlBase(e);o=As.resolveURL(u,this.path)}else o=As.extractUrlBase(e);this.manager.itemStart(e);const a=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ed(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,o,function(d){t(d),s.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Kd){try{o[ct.KHR_BINARY_GLTF]=new rS(e)}catch(h){r&&r(h);return}s=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new _S(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](u);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const h=s.extensionsUsed[d],f=s.extensionsRequired||[];switch(h){case ct.KHR_MATERIALS_UNLIT:o[h]=new VM;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[h]=new sS(s,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[h]=new oS;break;case ct.KHR_MESH_QUANTIZATION:o[h]=new aS;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function HM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zM{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const d=new Ne(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Qt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Ad(d),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Ix(d),u.distance=h;break;case"spot":u=new Lx(d),u.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,si(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class VM{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,n){const r=[];e.color=new Ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,an))}return Promise.all(r)}}class kM{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class GM{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(a,a)}return Promise.all(s)}}class WM{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class XM{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class jM{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,an)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class YM{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class qM{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],Qt),Promise.all(s)}}class KM{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class ZM{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],Qt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,an)),Promise.all(s)}}class $M{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class QM{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class JM{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class eS{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tS{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class nS{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,u=r.byteLength||0,d=r.count,h=r.byteStride,f=new Uint8Array(a,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,h,f,r.mode,r.filter).then(function(_){return _.buffer}):o.ready.then(function(){const _=new ArrayBuffer(d*h);return o.decodeGltfBuffer(new Uint8Array(_),d,h,f,r.mode,r.filter),_})})}else return null}}class iS{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const u of r.primitives)if(u.mode!==An.TRIANGLES&&u.mode!==An.TRIANGLE_STRIP&&u.mode!==An.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(d=>(l[u]=d,l[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const d=u.pop(),h=d.isGroup?d.children:[d],f=u[0].count,_=[];for(const v of h){const x=new Ze,g=new U,m=new Qe,w=new U(1,1,1),E=new fx(v.geometry,v.material,f);for(let A=0;A<f;A++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,A),l.SCALE&&w.fromBufferAttribute(l.SCALE,A),E.setMatrixAt(A,x.compose(g,m,w));for(const A in l)if(A==="_COLOR_0"){const O=l[A];E.instanceColor=new wl(O.array,O.itemSize,O.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&v.geometry.setAttribute(A,l[A]);At.prototype.copy.call(E,v),this.parser.assignFinalMaterial(E),_.push(E)}return d.isGroup?(d.clear(),d.add(..._),d):_[0]}))}}const Kd="glTF",vs=12,bh={JSON:1313821514,BIN:5130562};class rS{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-vs,s=new DataView(e,vs);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===bh.JSON){const u=new Uint8Array(e,vs+o,a);this.content=n.decode(u)}else if(l===bh.BIN){const u=vs+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},u={};for(const d in o){const h=Dl[d]||d.toLowerCase();a[h]=o[d]}for(const d in e.attributes){const h=Dl[d]||d.toLowerCase();if(o[d]!==void 0){const f=n.accessors[e.attributes[d]],_=Br[f.componentType];u[h]=_.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(h,f){r.decodeDracoFile(d,function(_){for(const v in _.attributes){const x=_.attributes[v],g=l[v];g!==void 0&&(x.normalized=g)}h(_)},a,u,Qt,f)})})}}class oS{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class aS{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class Zd extends Ns{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,u=a*3,d=r-t,h=(n-t)/d,f=h*h,_=f*h,v=e*u,x=v-u,g=-2*_+3*f,m=_-f,w=1-g,E=m-f+h;for(let A=0;A!==a;A++){const O=o[x+A+a],L=o[x+A+l]*d,I=o[v+A+a],V=o[v+A]*d;s[A]=w*O+E*L+g*I+m*V}return s}}const lS=new Qe;class cS extends Zd{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return lS.fromArray(s).normalize().toArray(s),s}}const An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ph={9728:cn,9729:xn,9984:Vh,9985:So,9986:ys,9987:oi},Lh={33071:bi,33648:Do,10497:Vr},Ga={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uS={CUBICSPLINE:void 0,LINEAR:bs,STEP:Rs},Wa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Kl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),i.DefaultMaterial}function ki(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function si(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dS(i,e,t){let n=!1,r=!1,s=!1;for(let u=0,d=e.length;u<d;u++){const h=e[u];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let u=0,d=e.length;u<d;u++){const h=e[u];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(u){const d=u[0],h=u[1],f=u[2];return n&&(i.morphAttributes.position=d),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function fS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pS(i){let e;const t=i.extensions&&i.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xa(t.attributes):e=i.indices+":"+Xa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Xa(i.targets[n]);return e}function Xa(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ul(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const gS=new Ze;class _S{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new bx(this.options.manager):this.textureLoader=new Ux(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ed(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return ki(s,a,r),si(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[u,d]of o.children.entries())s(d,a.children[u])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(As.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Ga[r.type],a=Br[r.componentType],l=r.normalized===!0,u=new a(r.count*o);return Promise.resolve(new vt(u,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ga[r.type],u=Br[r.componentType],d=u.BYTES_PER_ELEMENT,h=d*l,f=r.byteOffset||0,_=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let x,g;if(_&&_!==h){const m=Math.floor(f/_),w="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let E=t.cache.get(w);E||(x=new u(a,m*_,r.count*_/d),E=new cx(x,_/d),t.cache.add(w,E)),g=new ql(E,l,f%_/d,v)}else a===null?x=new u(r.count*l):x=new u(a,f,r.count*l),g=new vt(x,l,v);if(r.sparse!==void 0){const m=Ga.SCALAR,w=Br[r.sparse.indices.componentType],E=r.sparse.indices.byteOffset||0,A=r.sparse.values.byteOffset||0,O=new w(o[1],E,r.sparse.count*m),L=new u(o[2],A,r.sparse.count*l);a!==null&&(g=new vt(g.array.slice(),g.itemSize,g.normalized));for(let I=0,V=O.length;I<V;I++){const P=O[I];if(g.setX(P,L[I*l]),l>=2&&g.setY(P,L[I*l+1]),l>=3&&g.setZ(P,L[I*l+2]),l>=4&&g.setW(P,L[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return d.magFilter=Ph[f.magFilter]||xn,d.minFilter=Ph[f.minFilter]||oi,d.wrapS=Lh[f.wrapS]||Vr,d.wrapT=Lh[f.wrapT]||Vr,r.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){u=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(f,_){let v=f;t.isImageBitmapLoader===!0&&(v=function(x){const g=new jt(x);g.needsUpdate=!0,f(g)}),t.load(As.resolveURL(h,s.path),v,void 0,_)})}).then(function(h){return u===!0&&a.revokeObjectURL(l),si(h,o),h.userData.mimeType=o.mimeType||mS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new yd,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new $i,Fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Kl}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},u=[];if(l[ct.KHR_MATERIALS_UNLIT]){const h=r[ct.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),u.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Qt),a.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",h.baseColorTexture,an)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=wn);const d=s.alphaMode||Wa.OPAQUE;if(d===Wa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Wa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==li&&(u.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Fe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==li&&(u.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==li){const h=s.emissiveFactor;a.emissive=new Ne().setRGB(h[0],h[1],h[2],Qt)}return s.emissiveTexture!==void 0&&o!==li&&u.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,an)),Promise.all(u).then(function(){const h=new o(a);return s.name&&(h.name=s.name),si(h,s),t.associations.set(h,{materials:e}),s.extensions&&ki(r,h,s),h})}createUniqueName(e){const t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ch(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a],d=pS(u),h=r[d];if(h)o.push(h.promise);else{let f;u.extensions&&u.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=s(u):f=Ch(new Gt,u,t),r[d]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,u=o.length;l<u;l++){const d=o[l].material===void 0?hS(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const u=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let _=0,v=d.length;_<v;_++){const x=d[_],g=o[_];let m;const w=u[_];if(g.mode===An.TRIANGLES||g.mode===An.TRIANGLE_STRIP||g.mode===An.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new _d(x,w):new un(x,w),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===An.TRIANGLE_STRIP?m.geometry=Rh(m.geometry,$h):g.mode===An.TRIANGLE_FAN&&(m.geometry=Rh(m.geometry,El));else if(g.mode===An.LINES)m=new Us(x,w);else if(g.mode===An.LINE_STRIP)m=new jo(x,w);else if(g.mode===An.LINE_LOOP)m=new px(x,w);else if(g.mode===An.POINTS)m=new mx(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&fS(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),si(m,s),g.extensions&&ki(r,m,g),t.assignFinalMaterial(m),h.push(m)}for(let _=0,v=h.length;_<v;_++)t.associations.set(h[_],{meshes:e,primitives:_});if(h.length===1)return s.extensions&&ki(r,h[0],s),h[0];const f=new mn;s.extensions&&ki(r,f,s),t.associations.set(f,{meshes:e});for(let _=0,v=h.length;_<v;_++)f.add(h[_]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(Nt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new jl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),si(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let u=0,d=o.length;u<d;u++){const h=o[u];if(h){a.push(h);const f=new Ze;s!==null&&f.fromArray(s.array,u*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Ds(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],u=[],d=[];for(let h=0,f=r.channels.length;h<f;h++){const _=r.channels[h],v=r.samplers[_.sampler],x=_.target,g=x.node,m=r.parameters!==void 0?r.parameters[v.input]:v.input,w=r.parameters!==void 0?r.parameters[v.output]:v.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",w)),u.push(v),d.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(d)]).then(function(h){const f=h[0],_=h[1],v=h[2],x=h[3],g=h[4],m=[];for(let w=0,E=f.length;w<E;w++){const A=f[w],O=_[w],L=v[w],I=x[w],V=g[w];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const P=n._createAnimationTracks(A,O,L,I,V);if(P)for(let M=0;M<P.length;M++)m.push(P[M])}return new Sx(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,u=r.weights.length;l<u;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let u=0,d=a.length;u<d;u++)o.push(n.getDependency("node",a[u]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(u){const d=u[0],h=u[1],f=u[2];f!==null&&d.traverse(function(_){_.isSkinnedMesh&&_.bind(f,gS)});for(let _=0,v=h.length;_<v;_++)d.add(h[_]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let d;if(s.isBone===!0?d=new vd:u.length>1?d=new mn:u.length===1?d=u[0]:d=new At,d!==u[0])for(let h=0,f=u.length;h<f;h++)d.add(u[h]);if(s.name&&(d.userData.name=s.name,d.name=o),si(d,s),s.extensions&&ki(n,d,s),s.matrix!==void 0){const h=new Ze;h.fromArray(s.matrix),d.applyMatrix4(h)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return r.associations.has(d)||r.associations.set(d,{}),r.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new mn;n.name&&(s.name=r.createUniqueName(n.name)),si(s,n),n.extensions&&ki(t,s,n);const o=n.nodes||[],a=[];for(let l=0,u=o.length;l<u;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,h=l.length;d<h;d++)s.add(l[d]);const u=d=>{const h=new Map;for(const[f,_]of r.associations)(f instanceof Fn||f instanceof jt)&&h.set(f,_);return d.traverse(f=>{const _=r.associations.get(f);_!=null&&h.set(f,_)}),h};return r.associations=u(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ai[s.path]===Ai.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let u;switch(Ai[s.path]){case Ai.weights:u=jr;break;case Ai.rotation:u=Yr;break;case Ai.position:case Ai.scale:u=qr;break;default:switch(n.itemSize){case 1:u=jr;break;case 2:case 3:default:u=qr;break}break}const d=r.interpolation!==void 0?uS[r.interpolation]:bs,h=this._getArrayFromAccessor(n);for(let f=0,_=l.length;f<_;f++){const v=new u(l[f]+"."+Ai[s.path],t.array,h,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ul(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Yr?cS:Zd;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vS(i,e,t){const n=e.attributes,r=new fi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,u=a.max;if(l!==void 0&&u!==void 0){if(r.set(new U(l[0],l[1],l[2]),new U(u[0],u[1],u[2])),a.normalized){const d=Ul(Br[a.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new U,l=new U;for(let u=0,d=s.length;u<d;u++){const h=s[u];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],_=f.min,v=f.max;if(_!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(_[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(_[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(_[2]),Math.abs(v[2]))),f.normalized){const x=Ul(Br[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new jn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Ch(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Dl[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return pt.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),si(i,e),vS(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?dS(i,e.targets,t):i})}const Ih={type:"change"},ic={type:"start"},$d={type:"end"},Mo=new Cs,Dh=new wi,xS=Math.cos(70*Nt.DEG2RAD),zt=new U,pn=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ja=1e-6;class yS extends jx{constructor(e,t=null){super(e,t),this.state=St.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dr.ROTATE,MIDDLE:Dr.DOLLY,RIGHT:Dr.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Qe,this._lastTargetPosition=new U,this._quat=new Qe().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ku,this._sphericalDelta=new ku,this._scale=1,this._panOffset=new U,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new U,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=SS.bind(this),this._onPointerDown=MS.bind(this),this._onPointerUp=ES.bind(this),this._onContextMenu=LS.bind(this),this._onMouseWheel=wS.bind(this),this._onKeyDown=RS.bind(this),this._onTouchStart=bS.bind(this),this._onTouchMove=PS.bind(this),this._onMouseDown=TS.bind(this),this._onMouseMove=AS.bind(this),this._interceptControlDown=CS.bind(this),this._interceptControlUp=IS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ih),this.update(),this.state=St.NONE}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=pn:n>Math.PI&&(n-=pn),r<-Math.PI?r+=pn:r>Math.PI&&(r-=pn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=zt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new U(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Mo.origin.copy(this.object.position),Mo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mo.direction))<xS?this.object.lookAt(this.target):(Dh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mo.intersectPlane(Dh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ja||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ja||this._lastTargetPosition.distanceToSquared(this.target)>ja?(this.dispatchEvent(Ih),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;zt.copy(r).sub(this.target);let s=zt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function MS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function SS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ES(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($d),this.state=St.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function TS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Dr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=St.DOLLY;break;case Dr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}break;case Dr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(ic)}function AS(i){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function wS(i){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(i.preventDefault(),this.dispatchEvent(ic),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($d))}function RS(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function bS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=St.TOUCH_ROTATE;break;case Cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=St.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(ic)}function PS(i){switch(this._trackPointer(i),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=St.NONE}}function LS(i){this.enabled!==!1&&i.preventDefault()}function CS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function IS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Hn=(i,e,t)=>Math.max(Math.min(i,t),e),Uh=(i,e,t)=>(Hn(i,e,t)-e)/(t-e),Rr={Face:{eye:{l:1,r:1},mouth:{x:0,y:0,shape:{A:0,E:0,I:0,O:0,U:0}},head:{x:0,y:0,z:0,width:.3,height:.6,position:{x:.5,y:.5,z:0}},brow:0,pupil:{x:0,y:0}},Pose:{RightUpperArm:{x:0,y:0,z:-1.25},LeftUpperArm:{x:0,y:0,z:1.25},RightLowerArm:{x:0,y:0,z:0},LeftLowerArm:{x:0,y:0,z:0},LeftUpperLeg:{x:0,y:0,z:0},RightUpperLeg:{x:0,y:0,z:0},RightLowerLeg:{x:0,y:0,z:0},LeftLowerLeg:{x:0,y:0,z:0},LeftHand:{x:0,y:0,z:0},RightHand:{x:0,y:0,z:0},Spine:{x:0,y:0,z:0},Hips:{position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0}}},RightHand:{RightWrist:{x:-.13,y:-.07,z:-1.04},RightRingProximal:{x:0,y:0,z:-.13},RightRingIntermediate:{x:0,y:0,z:-.4},RightRingDistal:{x:0,y:0,z:-.04},RightIndexProximal:{x:0,y:0,z:-.24},RightIndexIntermediate:{x:0,y:0,z:-.25},RightIndexDistal:{x:0,y:0,z:-.06},RightMiddleProximal:{x:0,y:0,z:-.09},RightMiddleIntermediate:{x:0,y:0,z:-.44},RightMiddleDistal:{x:0,y:0,z:-.06},RightThumbProximal:{x:-.23,y:-.33,z:-.12},RightThumbIntermediate:{x:-.2,y:-.199,z:-.0139},RightThumbDistal:{x:-.2,y:.002,z:.15},RightLittleProximal:{x:0,y:0,z:-.09},RightLittleIntermediate:{x:0,y:0,z:-.225},RightLittleDistal:{x:0,y:0,z:-.1}},LeftHand:{LeftWrist:{x:-.13,y:-.07,z:-1.04},LeftRingProximal:{x:0,y:0,z:.13},LeftRingIntermediate:{x:0,y:0,z:.4},LeftRingDistal:{x:0,y:0,z:.049},LeftIndexProximal:{x:0,y:0,z:.24},LeftIndexIntermediate:{x:0,y:0,z:.25},LeftIndexDistal:{x:0,y:0,z:.06},LeftMiddleProximal:{x:0,y:0,z:.09},LeftMiddleIntermediate:{x:0,y:0,z:.44},LeftMiddleDistal:{x:0,y:0,z:.066},LeftThumbProximal:{x:-.23,y:.33,z:.12},LeftThumbIntermediate:{x:-.2,y:.25,z:.05},LeftThumbDistal:{x:-.2,y:.17,z:-.06},LeftLittleProximal:{x:0,y:0,z:.17},LeftLittleIntermediate:{x:0,y:0,z:.4},LeftLittleDistal:{x:0,y:0,z:.1}}},Kr="Right",Qd="Left",Bt=Math.PI,br=Math.PI*2;class ae{constructor(e,t,n){var r,s,o,a,l,u;if(Array.isArray(e)){this.x=(r=e[0])!==null&&r!==void 0?r:0,this.y=(s=e[1])!==null&&s!==void 0?s:0,this.z=(o=e[2])!==null&&o!==void 0?o:0;return}if(e&&typeof e=="object"){this.x=(a=e.x)!==null&&a!==void 0?a:0,this.y=(l=e.y)!==null&&l!==void 0?l:0,this.z=(u=e.z)!==null&&u!==void 0?u:0;return}this.x=e??0,this.y=t??0,this.z=n??0}negative(){return new ae(-this.x,-this.y,-this.z)}add(e){return e instanceof ae?new ae(this.x+e.x,this.y+e.y,this.z+e.z):new ae(this.x+e,this.y+e,this.z+e)}subtract(e){return e instanceof ae?new ae(this.x-e.x,this.y-e.y,this.z-e.z):new ae(this.x-e,this.y-e,this.z-e)}multiply(e){return e instanceof ae?new ae(this.x*e.x,this.y*e.y,this.z*e.z):new ae(this.x*e,this.y*e,this.z*e)}divide(e){return e instanceof ae?new ae(this.x/e.x,this.y/e.y,this.z/e.z):new ae(this.x/e,this.y/e,this.z/e)}equals(e){return this.x==e.x&&this.y==e.y&&this.z==e.z}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){return new ae(this.y*e.z-this.z*e.y,this.z*e.x-this.x*e.z,this.x*e.y-this.y*e.x)}length(){return Math.sqrt(this.dot(this))}distance(e,t=3){return Math.sqrt(t===2?Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2):Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2)+Math.pow(this.z-e.z,2))}lerp(e,t){return e.subtract(this).multiply(t).add(this)}unit(){return this.divide(this.length())}min(){return Math.min(Math.min(this.x,this.y),this.z)}max(){return Math.max(Math.max(this.x,this.y),this.z)}toSphericalCoords(e={x:"x",y:"y",z:"z"}){return{theta:Math.atan2(this[e.y],this[e.x]),phi:Math.acos(this[e.z]/this.length())}}angleTo(e){return Math.acos(this.dot(e)/(this.length()*e.length()))}toArray(e){return[this.x,this.y,this.z].slice(0,e||3)}clone(){return new ae(this.x,this.y,this.z)}init(e,t,n){return this.x=e,this.y=t,this.z=n,this}static negative(e,t=new ae){return t.x=-e.x,t.y=-e.y,t.z=-e.z,t}static add(e,t,n=new ae){return t instanceof ae?(n.x=e.x+t.x,n.y=e.y+t.y,n.z=e.z+t.z):(n.x=e.x+t,n.y=e.y+t,n.z=e.z+t),n}static subtract(e,t,n=new ae){return t instanceof ae?(n.x=e.x-t.x,n.y=e.y-t.y,n.z=e.z-t.z):(n.x=e.x-t,n.y=e.y-t,n.z=e.z-t),n}static multiply(e,t,n=new ae){return t instanceof ae?(n.x=e.x*t.x,n.y=e.y*t.y,n.z=e.z*t.z):(n.x=e.x*t,n.y=e.y*t,n.z=e.z*t),n}static divide(e,t,n=new ae){return t instanceof ae?(n.x=e.x/t.x,n.y=e.y/t.y,n.z=e.z/t.z):(n.x=e.x/t,n.y=e.y/t,n.z=e.z/t),n}static cross(e,t,n=new ae){return n.x=e.y*t.z-e.z*t.y,n.y=e.z*t.x-e.x*t.z,n.z=e.x*t.y-e.y*t.x,n}static unit(e,t){const n=e.length();return t.x=e.x/n,t.y=e.y/n,t.z=e.z/n,t}static fromAngles(e,t){return new ae(Math.cos(e)*Math.cos(t),Math.sin(t),Math.sin(e)*Math.cos(t))}static randomDirection(){return ae.fromAngles(Math.random()*br,Math.asin(Math.random()*2-1))}static min(e,t){return new ae(Math.min(e.x,t.x),Math.min(e.y,t.y),Math.min(e.z,t.z))}static max(e,t){return new ae(Math.max(e.x,t.x),Math.max(e.y,t.y),Math.max(e.z,t.z))}static lerp(e,t,n){return t instanceof ae?t.subtract(e).multiply(n).add(e):(t-e)*n+e}static fromArray(e){return Array.isArray(e)?new ae(e[0],e[1],e[2]):new ae(e.x,e.y,e.z)}static angleBetween(e,t){return e.angleTo(t)}static distance(e,t,n){return Math.sqrt(n===2?Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2):Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}static toDegrees(e){return e*(180/Bt)}static normalizeAngle(e){let t=e%br;return t=t>Bt?t-br:t<-Bt?br+t:t,t/Bt}static normalizeRadians(e){return e>=Bt/2&&(e-=br),e<=-Bt/2&&(e+=br,e=Bt-e),e/Bt}static find2DAngle(e,t,n,r){const s=r-t,o=n-e;return Math.atan2(s,o)}static findRotation(e,t,n=!0){return n?new ae(ae.normalizeRadians(ae.find2DAngle(e.z,e.x,t.z,t.x)),ae.normalizeRadians(ae.find2DAngle(e.z,e.y,t.z,t.y)),ae.normalizeRadians(ae.find2DAngle(e.x,e.y,t.x,t.y))):new ae(ae.find2DAngle(e.z,e.x,t.z,t.x),ae.find2DAngle(e.z,e.y,t.z,t.y),ae.find2DAngle(e.x,e.y,t.x,t.y))}static rollPitchYaw(e,t,n){if(!n)return new ae(ae.normalizeAngle(ae.find2DAngle(e.z,e.y,t.z,t.y)),ae.normalizeAngle(ae.find2DAngle(e.z,e.x,t.z,t.x)),ae.normalizeAngle(ae.find2DAngle(e.x,e.y,t.x,t.y)));const r=t.subtract(e),s=n.subtract(e),a=r.cross(s).unit(),l=r.unit(),u=a.cross(l),d=Math.asin(a.x)||0,h=Math.atan2(-a.y,a.z)||0,f=Math.atan2(-u.x,l.x)||0;return new ae(ae.normalizeAngle(h),ae.normalizeAngle(d),ae.normalizeAngle(f))}static angleBetween3DCoords(e,t,n){e instanceof ae||(e=new ae(e),t=new ae(t),n=new ae(n));const r=e.subtract(t),s=n.subtract(t),o=r.unit(),a=s.unit(),l=o.dot(a),u=Math.acos(l);return ae.normalizeRadians(u)}static getRelativeSphericalCoords(e,t,n,r){e instanceof ae||(e=new ae(e),t=new ae(t),n=new ae(n));const s=t.subtract(e),o=n.subtract(t),a=s.unit(),l=o.unit(),{theta:u,phi:d}=a.toSphericalCoords(r),{theta:h,phi:f}=l.toSphericalCoords(r),_=u-h,v=d-f;return{theta:ae.normalizeAngle(_),phi:ae.normalizeAngle(v)}}static getSphericalCoords(e,t,n={x:"x",y:"y",z:"z"}){e instanceof ae||(e=new ae(e),t=new ae(t));const s=t.subtract(e).unit(),{theta:o,phi:a}=s.toSphericalCoords(n);return{theta:ae.normalizeAngle(-o),phi:ae.normalizeAngle(Bt/2-a)}}}const Jd=i=>{const e={r:ae.findRotation(i[11],i[13]),l:ae.findRotation(i[12],i[14])};e.r.y=ae.angleBetween3DCoords(i[12],i[11],i[13]),e.l.y=ae.angleBetween3DCoords(i[11],i[12],i[14]);const t={r:ae.findRotation(i[13],i[15]),l:ae.findRotation(i[14],i[16])};t.r.y=ae.angleBetween3DCoords(i[11],i[13],i[15]),t.l.y=ae.angleBetween3DCoords(i[12],i[14],i[16]),t.r.z=Hn(t.r.z,-2.14,0),t.l.z=Hn(t.l.z,-2.14,0);const n={r:ae.findRotation(ae.fromArray(i[15]),ae.lerp(ae.fromArray(i[17]),ae.fromArray(i[19]),.5)),l:ae.findRotation(ae.fromArray(i[16]),ae.lerp(ae.fromArray(i[18]),ae.fromArray(i[20]),.5))},r=Nh(e.r,t.r,n.r,Kr),s=Nh(e.l,t.l,n.l,Qd);return{UpperArm:{r:r.UpperArm,l:s.UpperArm},LowerArm:{r:r.LowerArm,l:s.LowerArm},Hand:{r:r.Hand,l:s.Hand},Unscaled:{UpperArm:e,LowerArm:t,Hand:n}}},Nh=(i,e,t,n=Kr)=>{const r=n===Kr?1:-1;return i.z*=-2.3*r,i.y*=Bt*r,i.y-=Math.max(e.x),i.y-=-r*Math.max(e.z,0),i.x-=.3*r,e.z*=-2.14*r,e.y*=2.14*r,e.x*=2.14*r,i.x=Hn(i.x,-.5,Bt),e.x=Hn(e.x,-.3,.3),t.y=Hn(t.z*2,-.6,.6),t.z=t.z*-2.3*r,{UpperArm:i,LowerArm:e,Hand:t}},ef=(i,e)=>{const t=ae.fromArray(e[23]),n=ae.fromArray(e[24]),r=ae.fromArray(e[11]),s=ae.fromArray(e[12]),o=t.lerp(n,1),a=r.lerp(s,1),l=o.distance(a),u={position:{x:Hn(o.x-.4,-1,1),y:0,z:Hn(l-1,-2,0)}};u.worldPosition={x:u.position.x,y:0,z:u.position.z*Math.pow(u.position.z*-2,2)},u.worldPosition.x*=u.worldPosition.z,u.rotation=ae.rollPitchYaw(i[23],i[24]),u.rotation.y>.5&&(u.rotation.y-=2),u.rotation.y+=.5,u.rotation.z>0&&(u.rotation.z=1-u.rotation.z),u.rotation.z<0&&(u.rotation.z=-1-u.rotation.z);const d=Uh(Math.abs(u.rotation.y),.2,.4);u.rotation.z*=1-d,u.rotation.x=0;const h=ae.rollPitchYaw(i[11],i[12]);h.y>.5&&(h.y-=2),h.y+=.5,h.z>0&&(h.z=1-h.z),h.z<0&&(h.z=-1-h.z);const f=Uh(Math.abs(h.y),.2,.4);return h.z*=1-f,h.x=0,DS(u,h)},DS=(i,e)=>(i.rotation&&(i.rotation.x*=Math.PI,i.rotation.y*=Math.PI,i.rotation.z*=Math.PI),e.x*=Bt,e.y*=Bt,e.z*=Bt,{Hips:i,Spine:e});class Vo{constructor(e,t,n,r){var s,o,a,l;if(e&&typeof e=="object"){this.x=(s=e.x)!==null&&s!==void 0?s:0,this.y=(o=e.y)!==null&&o!==void 0?o:0,this.z=(a=e.z)!==null&&a!==void 0?a:0,this.rotationOrder=(l=e.rotationOrder)!==null&&l!==void 0?l:"XYZ";return}this.x=e??0,this.y=t??0,this.z=n??0,this.rotationOrder=r??"XYZ"}multiply(e){return new Vo(this.x*e,this.y*e,this.z*e,this.rotationOrder)}}const US={upperLeg:{z:.1}},tf=i=>{const e=ae.getSphericalCoords(i[23],i[25],{x:"y",y:"z",z:"x"}),t=ae.getSphericalCoords(i[24],i[26],{x:"y",y:"z",z:"x"}),n=ae.getRelativeSphericalCoords(i[23],i[25],i[27],{x:"y",y:"z",z:"x"}),r=ae.getRelativeSphericalCoords(i[24],i[26],i[28],{x:"y",y:"z",z:"x"}),s=ae.findRotation(i[23],i[24]),o={r:new ae({x:e.theta,y:n.phi,z:e.phi-s.z}),l:new ae({x:t.theta,y:r.phi,z:t.phi-s.z})},a={r:new ae({x:-Math.abs(n.theta),y:0,z:0}),l:new ae({x:-Math.abs(r.theta),y:0,z:0})},l=Oh(o.r,a.r,Kr),u=Oh(o.l,a.l,Qd);return{UpperLeg:{r:l.UpperLeg,l:u.UpperLeg},LowerLeg:{r:l.LowerLeg,l:u.LowerLeg},Unscaled:{UpperLeg:o,LowerLeg:a}}},Oh=(i,e,t=Kr)=>{const n=t===Kr?1:-1,r=new Vo({x:Hn(i.x,0,.5)*Bt,y:Hn(i.y,-.25,.25)*Bt,z:Hn(i.z,-.5,.5)*Bt+n*US.upperLeg.z,rotationOrder:"XYZ"}),s=new Vo({x:e.x*Bt,y:e.y*Bt,z:e.z*Bt});return{UpperLeg:r,LowerLeg:s}};class Yo{static solve(e,t,{runtime:n="mediapipe",video:r=null,imageSize:s=null,enableLegs:o=!0}={}){var a,l,u,d;if(!e&&!t){console.error("Need both World Pose and Pose Landmarks");return}if(r){const w=typeof r=="string"?document.querySelector(r):r;s={width:w.videoWidth,height:w.videoHeight}}if(n==="tfjs"&&s){for(const w of e)w.visibility=w.score;for(const w of t)w.x/=s.width,w.y/=s.height,w.z=0,w.visibility=w.score}const h=Jd(e),f=ef(e,t),_=o?tf(e):null,v=e[15].y>.1||((a=e[15].visibility)!==null&&a!==void 0?a:0)<.23||.995<t[15].y,x=e[16].y>.1||((l=e[16].visibility)!==null&&l!==void 0?l:0)<.23||.995<t[16].y,g=e[23].y>.1||((u=e[23].visibility)!==null&&u!==void 0?u:0)<.63||f.Hips.position.z>-.4,m=e[24].y>.1||((d=e[24].visibility)!==null&&d!==void 0?d:0)<.63||f.Hips.position.z>-.4;return h.UpperArm.l=h.UpperArm.l.multiply(x?0:1),h.UpperArm.l.z=x?Rr.Pose.LeftUpperArm.z:h.UpperArm.l.z,h.UpperArm.r=h.UpperArm.r.multiply(v?0:1),h.UpperArm.r.z=v?Rr.Pose.RightUpperArm.z:h.UpperArm.r.z,h.LowerArm.l=h.LowerArm.l.multiply(x?0:1),h.LowerArm.r=h.LowerArm.r.multiply(v?0:1),h.Hand.l=h.Hand.l.multiply(x?0:1),h.Hand.r=h.Hand.r.multiply(v?0:1),_&&(_.UpperLeg.l=_.UpperLeg.l.multiply(m?0:1),_.UpperLeg.r=_.UpperLeg.r.multiply(g?0:1),_.LowerLeg.l=_.LowerLeg.l.multiply(m?0:1),_.LowerLeg.r=_.LowerLeg.r.multiply(g?0:1)),{RightUpperArm:h.UpperArm.r,RightLowerArm:h.LowerArm.r,LeftUpperArm:h.UpperArm.l,LeftLowerArm:h.LowerArm.l,RightHand:h.Hand.r,LeftHand:h.Hand.l,RightUpperLeg:_?_.UpperLeg.r:Rr.Pose.RightUpperLeg,RightLowerLeg:_?_.LowerLeg.r:Rr.Pose.RightLowerLeg,LeftUpperLeg:_?_.UpperLeg.l:Rr.Pose.LeftUpperLeg,LeftLowerLeg:_?_.LowerLeg.l:Rr.Pose.LeftLowerLeg,Hips:f.Hips,Spine:f.Spine}}}Yo.calcArms=Jd;Yo.calcHips=ef;Yo.calcLegs=tf;var NS={};(function(){function i(M){var b=0;return function(){return b<M.length?{done:!1,value:M[b++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(M,b,X){return M==Array.prototype||M==Object.prototype||(M[b]=X.value),M};function t(M){M=[typeof globalThis=="object"&&globalThis,M,typeof window=="object"&&window,typeof self=="object"&&self,typeof ci=="object"&&ci];for(var b=0;b<M.length;++b){var X=M[b];if(X&&X.Math==Math)return X}throw Error("Cannot find global object")}var n=t(this);function r(M,b){if(b)e:{var X=n;M=M.split(".");for(var k=0;k<M.length-1;k++){var Z=M[k];if(!(Z in X))break e;X=X[Z]}M=M[M.length-1],k=X[M],b=b(k),b!=k&&b!=null&&e(X,M,{configurable:!0,writable:!0,value:b})}}r("Symbol",function(M){function b(ee){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new X(k+(ee||"")+"_"+Z++,ee)}function X(ee,H){this.g=ee,e(this,"description",{configurable:!0,writable:!0,value:H})}if(M)return M;X.prototype.toString=function(){return this.g};var k="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",Z=0;return b}),r("Symbol.iterator",function(M){if(M)return M;M=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),X=0;X<b.length;X++){var k=n[b[X]];typeof k=="function"&&typeof k.prototype[M]!="function"&&e(k.prototype,M,{configurable:!0,writable:!0,value:function(){return s(i(this))}})}return M});function s(M){return M={next:M},M[Symbol.iterator]=function(){return this},M}function o(M){var b=typeof Symbol<"u"&&Symbol.iterator&&M[Symbol.iterator];return b?b.call(M):{next:i(M)}}function a(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function l(M){if(M.i)throw new TypeError("Generator is already running");M.i=!0}a.prototype.l=function(M){this.o=M};function u(M,b){M.h={F:b,G:!0},M.j=M.m}a.prototype.return=function(M){this.h={return:M},this.j=this.m};function d(M){this.g=new a,this.h=M}function h(M,b){l(M.g);var X=M.g.g;return X?f(M,"return"in X?X.return:function(k){return{value:k,done:!0}},b,M.g.return):(M.g.return(b),_(M))}function f(M,b,X,k){try{var Z=b.call(M.g.g,X);if(!(Z instanceof Object))throw new TypeError("Iterator result "+Z+" is not an object");if(!Z.done)return M.g.i=!1,Z;var ee=Z.value}catch(H){return M.g.g=null,u(M.g,H),_(M)}return M.g.g=null,k.call(M.g,ee),_(M)}function _(M){for(;M.g.j;)try{var b=M.h(M.g);if(b)return M.g.i=!1,{value:b.value,done:!1}}catch(X){M.g.o=void 0,u(M.g,X)}if(M.g.i=!1,M.g.h){if(b=M.g.h,M.g.h=null,b.G)throw b.F;return{value:b.return,done:!0}}return{value:void 0,done:!0}}function v(M){this.next=function(b){return l(M.g),M.g.g?b=f(M,M.g.g.next,b,M.g.l):(M.g.l(b),b=_(M)),b},this.throw=function(b){return l(M.g),M.g.g?b=f(M,M.g.g.throw,b,M.g.l):(u(M.g,b),b=_(M)),b},this.return=function(b){return h(M,b)},this[Symbol.iterator]=function(){return this}}function x(M){function b(k){return M.next(k)}function X(k){return M.throw(k)}return new Promise(function(k,Z){function ee(H){H.done?k(H.value):Promise.resolve(H.value).then(b,X).then(ee,Z)}ee(M.next())})}r("Promise",function(M){function b(H){this.h=0,this.i=void 0,this.g=[],this.o=!1;var $=this.j();try{H($.resolve,$.reject)}catch(Y){$.reject(Y)}}function X(){this.g=null}function k(H){return H instanceof b?H:new b(function($){$(H)})}if(M)return M;X.prototype.h=function(H){if(this.g==null){this.g=[];var $=this;this.i(function(){$.l()})}this.g.push(H)};var Z=n.setTimeout;X.prototype.i=function(H){Z(H,0)},X.prototype.l=function(){for(;this.g&&this.g.length;){var H=this.g;this.g=[];for(var $=0;$<H.length;++$){var Y=H[$];H[$]=null;try{Y()}catch(le){this.j(le)}}}this.g=null},X.prototype.j=function(H){this.i(function(){throw H})},b.prototype.j=function(){function H(le){return function(pe){Y||(Y=!0,le.call($,pe))}}var $=this,Y=!1;return{resolve:H(this.A),reject:H(this.l)}},b.prototype.A=function(H){if(H===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(H instanceof b)this.C(H);else{e:switch(typeof H){case"object":var $=H!=null;break e;case"function":$=!0;break e;default:$=!1}$?this.v(H):this.m(H)}},b.prototype.v=function(H){var $=void 0;try{$=H.then}catch(Y){this.l(Y);return}typeof $=="function"?this.D($,H):this.m(H)},b.prototype.l=function(H){this.u(2,H)},b.prototype.m=function(H){this.u(1,H)},b.prototype.u=function(H,$){if(this.h!=0)throw Error("Cannot settle("+H+", "+$+"): Promise already settled in state"+this.h);this.h=H,this.i=$,this.h===2&&this.B(),this.H()},b.prototype.B=function(){var H=this;Z(function(){if(H.I()){var $=n.console;typeof $<"u"&&$.error(H.i)}},1)},b.prototype.I=function(){if(this.o)return!1;var H=n.CustomEvent,$=n.Event,Y=n.dispatchEvent;return typeof Y>"u"?!0:(typeof H=="function"?H=new H("unhandledrejection",{cancelable:!0}):typeof $=="function"?H=new $("unhandledrejection",{cancelable:!0}):(H=n.document.createEvent("CustomEvent"),H.initCustomEvent("unhandledrejection",!1,!0,H)),H.promise=this,H.reason=this.i,Y(H))},b.prototype.H=function(){if(this.g!=null){for(var H=0;H<this.g.length;++H)ee.h(this.g[H]);this.g=null}};var ee=new X;return b.prototype.C=function(H){var $=this.j();H.s($.resolve,$.reject)},b.prototype.D=function(H,$){var Y=this.j();try{H.call($,Y.resolve,Y.reject)}catch(le){Y.reject(le)}},b.prototype.then=function(H,$){function Y(ze,Je){return typeof ze=="function"?function(te){try{le(ze(te))}catch(he){pe(he)}}:Je}var le,pe,we=new b(function(ze,Je){le=ze,pe=Je});return this.s(Y(H,le),Y($,pe)),we},b.prototype.catch=function(H){return this.then(void 0,H)},b.prototype.s=function(H,$){function Y(){switch(le.h){case 1:H(le.i);break;case 2:$(le.i);break;default:throw Error("Unexpected state: "+le.h)}}var le=this;this.g==null?ee.h(Y):this.g.push(Y),this.o=!0},b.resolve=k,b.reject=function(H){return new b(function($,Y){Y(H)})},b.race=function(H){return new b(function($,Y){for(var le=o(H),pe=le.next();!pe.done;pe=le.next())k(pe.value).s($,Y)})},b.all=function(H){var $=o(H),Y=$.next();return Y.done?k([]):new b(function(le,pe){function we(te){return function(he){ze[te]=he,Je--,Je==0&&le(ze)}}var ze=[],Je=0;do ze.push(void 0),Je++,k(Y.value).s(we(ze.length-1),pe),Y=$.next();while(!Y.done)})},b});var g=typeof Object.assign=="function"?Object.assign:function(M,b){for(var X=1;X<arguments.length;X++){var k=arguments[X];if(k)for(var Z in k)Object.prototype.hasOwnProperty.call(k,Z)&&(M[Z]=k[Z])}return M};r("Object.assign",function(M){return M||g});var m=this||self,w={facingMode:"user",width:640,height:480};function E(M,b){this.video=M,this.i=0,this.h=Object.assign(Object.assign({},w),b)}E.prototype.stop=function(){var M=this,b,X,k,Z;return x(new v(new d(function(ee){if(M.g){for(b=M.g.getTracks(),X=o(b),k=X.next();!k.done;k=X.next())Z=k.value,Z.stop();M.g=void 0}ee.j=0})))},E.prototype.start=function(){var M=this,b;return x(new v(new d(function(X){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),b=M.h,X.return(navigator.mediaDevices.getUserMedia({video:{facingMode:b.facingMode,width:b.width,height:b.height}}).then(function(k){O(M,k)}).catch(function(k){var Z="Failed to acquire camera feed: "+k;throw console.error(Z),alert(Z),k}))})))};function A(M){window.requestAnimationFrame(function(){L(M)})}function O(M,b){M.g=b,M.video.srcObject=b,M.video.onloadedmetadata=function(){M.video.play(),A(M)}}function L(M){var b=null;M.video.paused||M.video.currentTime===M.i||(M.i=M.video.currentTime,b=M.h.onFrame()),b?b.then(function(){A(M)}):A(M)}var I=["Camera"],V=m;I[0]in V||typeof V.execScript>"u"||V.execScript("var "+I[0]);for(var P;I.length&&(P=I.shift());)I.length||E===void 0?V[P]&&V[P]!==Object.prototype[P]?V=V[P]:V=V[P]={}:V[P]=E}).call(ci);var xs={};(function(){function i(v){var x=0;return function(){return x<v.length?{done:!1,value:v[x++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(v,x,g){return v==Array.prototype||v==Object.prototype||(v[x]=g.value),v};function t(v){v=[typeof globalThis=="object"&&globalThis,v,typeof window=="object"&&window,typeof self=="object"&&self,typeof ci=="object"&&ci];for(var x=0;x<v.length;++x){var g=v[x];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var n=t(this);function r(v,x){if(x)e:{var g=n;v=v.split(".");for(var m=0;m<v.length-1;m++){var w=v[m];if(!(w in g))break e;g=g[w]}v=v[v.length-1],m=g[v],x=x(m),x!=m&&x!=null&&e(g,v,{configurable:!0,writable:!0,value:x})}}function s(v){var x=typeof Symbol<"u"&&Symbol.iterator&&v[Symbol.iterator];return x?x.call(v):{next:i(v)}}var o=typeof Object.assign=="function"?Object.assign:function(v,x){for(var g=1;g<arguments.length;g++){var m=arguments[g];if(m)for(var w in m)Object.prototype.hasOwnProperty.call(m,w)&&(v[w]=m[w])}return v};r("Object.assign",function(v){return v||o}),r("Array.prototype.fill",function(v){return v||function(x,g,m){var w=this.length||0;for(0>g&&(g=Math.max(0,w+g)),(m==null||m>w)&&(m=w),m=Number(m),0>m&&(m=Math.max(0,w+m)),g=Number(g||0);g<m;g++)this[g]=x;return this}});function a(v){return v||Array.prototype.fill}r("Int8Array.prototype.fill",a),r("Uint8Array.prototype.fill",a),r("Uint8ClampedArray.prototype.fill",a),r("Int16Array.prototype.fill",a),r("Uint16Array.prototype.fill",a),r("Int32Array.prototype.fill",a),r("Uint32Array.prototype.fill",a),r("Float32Array.prototype.fill",a),r("Float64Array.prototype.fill",a);var l=this||self;function u(v,x){v=v.split(".");var g=l;v[0]in g||typeof g.execScript>"u"||g.execScript("var "+v[0]);for(var m;v.length&&(m=v.shift());)v.length||x===void 0?g[m]&&g[m]!==Object.prototype[m]?g=g[m]:g=g[m]={}:g[m]=x}var d={color:"white",lineWidth:4,radius:6,visibilityMin:.5};function h(v){return v=v||{},Object.assign({},d,{fillColor:v.color},v)}function f(v,x){return v instanceof Function?v(x):v}function _(v,x,g){return Math.max(Math.min(x,g),Math.min(Math.max(x,g),v))}u("clamp",_),u("drawLandmarks",function(v,x,g){if(x){g=h(g),v.save();var m=v.canvas,w=0;x=s(x);for(var E=x.next();!E.done;E=x.next())if(E=E.value,E!==void 0&&(E.visibility===void 0||E.visibility>g.visibilityMin)){v.fillStyle=f(g.fillColor,{index:w,from:E}),v.strokeStyle=f(g.color,{index:w,from:E}),v.lineWidth=f(g.lineWidth,{index:w,from:E});var A=new Path2D;A.arc(E.x*m.width,E.y*m.height,f(g.radius,{index:w,from:E}),0,2*Math.PI),v.fill(A),v.stroke(A),++w}v.restore()}}),u("drawConnectors",function(v,x,g,m){if(x&&g){m=h(m),v.save();var w=v.canvas,E=0;g=s(g);for(var A=g.next();!A.done;A=g.next()){var O=A.value;v.beginPath(),A=x[O[0]],O=x[O[1]],A&&O&&(A.visibility===void 0||A.visibility>m.visibilityMin)&&(O.visibility===void 0||O.visibility>m.visibilityMin)&&(v.strokeStyle=f(m.color,{index:E,from:A,to:O}),v.lineWidth=f(m.lineWidth,{index:E,from:A,to:O}),v.moveTo(A.x*w.width,A.y*w.height),v.lineTo(O.x*w.width,O.y*w.height)),++E,v.stroke()}v.restore()}}),u("drawRectangle",function(v,x,g){g=h(g),v.save();var m=v.canvas;v.beginPath(),v.lineWidth=f(g.lineWidth,{}),v.strokeStyle=f(g.color,{}),v.fillStyle=f(g.fillColor,{}),v.translate(x.xCenter*m.width,x.yCenter*m.height),v.rotate(x.rotation*Math.PI/180),v.rect(-x.width/2*m.width,-x.height/2*m.height,x.width*m.width,x.height*m.height),v.translate(-x.xCenter*m.width,-x.yCenter*m.height),v.stroke(),v.fill(),v.restore()}),u("lerp",function(v,x,g,m,w){return _(m*(1-(v-x)/(g-x))+w*(1-(g-v)/(g-x)),m,w)})}).call(ci);var Fh={};(function(){var i;function e(c){var p=0;return function(){return p<c.length?{done:!1,value:c[p++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,y){return c==Array.prototype||c==Object.prototype||(c[p]=y.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof ci=="object"&&ci];for(var p=0;p<c.length;++p){var y=c[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=n(this);function s(c,p){if(p)e:{var y=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var C=c[S];if(!(C in y))break e;y=y[C]}c=c[c.length-1],S=y[c],p=p(S),p!=S&&p!=null&&t(y,c,{configurable:!0,writable:!0,value:p})}}s("Symbol",function(c){function p(N){if(this instanceof p)throw new TypeError("Symbol is not a constructor");return new y(S+(N||"")+"_"+C++,N)}function y(N,D){this.h=N,t(this,"description",{configurable:!0,writable:!0,value:D})}if(c)return c;y.prototype.toString=function(){return this.h};var S="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",C=0;return p}),s("Symbol.iterator",function(c){if(c)return c;c=Symbol("Symbol.iterator");for(var p="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),y=0;y<p.length;y++){var S=r[p[y]];typeof S=="function"&&typeof S.prototype[c]!="function"&&t(S.prototype,c,{configurable:!0,writable:!0,value:function(){return o(e(this))}})}return c});function o(c){return c={next:c},c[Symbol.iterator]=function(){return this},c}function a(c){var p=typeof Symbol<"u"&&Symbol.iterator&&c[Symbol.iterator];return p?p.call(c):{next:e(c)}}function l(c){if(!(c instanceof Array)){c=a(c);for(var p,y=[];!(p=c.next()).done;)y.push(p.value);c=y}return c}var u=typeof Object.assign=="function"?Object.assign:function(c,p){for(var y=1;y<arguments.length;y++){var S=arguments[y];if(S)for(var C in S)Object.prototype.hasOwnProperty.call(S,C)&&(c[C]=S[C])}return c};s("Object.assign",function(c){return c||u});var d=typeof Object.create=="function"?Object.create:function(c){function p(){}return p.prototype=c,new p},h;if(typeof Object.setPrototypeOf=="function")h=Object.setPrototypeOf;else{var f;e:{var _={a:!0},v={};try{v.__proto__=_,f=v.a;break e}catch{}f=!1}h=f?function(c,p){if(c.__proto__=p,c.__proto__!==p)throw new TypeError(c+" is not extensible");return c}:null}var x=h;function g(c,p){if(c.prototype=d(p.prototype),c.prototype.constructor=c,x)x(c,p);else for(var y in p)if(y!="prototype")if(Object.defineProperties){var S=Object.getOwnPropertyDescriptor(p,y);S&&Object.defineProperty(c,y,S)}else c[y]=p[y];c.za=p.prototype}function m(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function w(c){if(c.m)throw new TypeError("Generator is already running");c.m=!0}m.prototype.u=function(c){this.i=c};function E(c,p){c.l={ma:p,na:!0},c.h=c.s||c.v}m.prototype.return=function(c){this.l={return:c},this.h=this.v};function A(c,p,y){return c.h=y,{value:p}}function O(c){this.h=new m,this.i=c}function L(c,p){w(c.h);var y=c.h.j;return y?I(c,"return"in y?y.return:function(S){return{value:S,done:!0}},p,c.h.return):(c.h.return(p),V(c))}function I(c,p,y,S){try{var C=p.call(c.h.j,y);if(!(C instanceof Object))throw new TypeError("Iterator result "+C+" is not an object");if(!C.done)return c.h.m=!1,C;var N=C.value}catch(D){return c.h.j=null,E(c.h,D),V(c)}return c.h.j=null,S.call(c.h,N),V(c)}function V(c){for(;c.h.h;)try{var p=c.i(c.h);if(p)return c.h.m=!1,{value:p.value,done:!1}}catch(y){c.h.i=void 0,E(c.h,y)}if(c.h.m=!1,c.h.l){if(p=c.h.l,c.h.l=null,p.na)throw p.ma;return{value:p.return,done:!0}}return{value:void 0,done:!0}}function P(c){this.next=function(p){return w(c.h),c.h.j?p=I(c,c.h.j.next,p,c.h.u):(c.h.u(p),p=V(c)),p},this.throw=function(p){return w(c.h),c.h.j?p=I(c,c.h.j.throw,p,c.h.u):(E(c.h,p),p=V(c)),p},this.return=function(p){return L(c,p)},this[Symbol.iterator]=function(){return this}}function M(c){function p(S){return c.next(S)}function y(S){return c.throw(S)}return new Promise(function(S,C){function N(D){D.done?S(D.value):Promise.resolve(D.value).then(p,y).then(N,C)}N(c.next())})}function b(c){return M(new P(new O(c)))}s("Promise",function(c){function p(D){this.i=0,this.j=void 0,this.h=[],this.u=!1;var z=this.l();try{D(z.resolve,z.reject)}catch(Q){z.reject(Q)}}function y(){this.h=null}function S(D){return D instanceof p?D:new p(function(z){z(D)})}if(c)return c;y.prototype.i=function(D){if(this.h==null){this.h=[];var z=this;this.j(function(){z.m()})}this.h.push(D)};var C=r.setTimeout;y.prototype.j=function(D){C(D,0)},y.prototype.m=function(){for(;this.h&&this.h.length;){var D=this.h;this.h=[];for(var z=0;z<D.length;++z){var Q=D[z];D[z]=null;try{Q()}catch(ue){this.l(ue)}}}this.h=null},y.prototype.l=function(D){this.j(function(){throw D})},p.prototype.l=function(){function D(ue){return function(_e){Q||(Q=!0,ue.call(z,_e))}}var z=this,Q=!1;return{resolve:D(this.I),reject:D(this.m)}},p.prototype.I=function(D){if(D===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(D instanceof p)this.L(D);else{e:switch(typeof D){case"object":var z=D!=null;break e;case"function":z=!0;break e;default:z=!1}z?this.F(D):this.s(D)}},p.prototype.F=function(D){var z=void 0;try{z=D.then}catch(Q){this.m(Q);return}typeof z=="function"?this.M(z,D):this.s(D)},p.prototype.m=function(D){this.v(2,D)},p.prototype.s=function(D){this.v(1,D)},p.prototype.v=function(D,z){if(this.i!=0)throw Error("Cannot settle("+D+", "+z+"): Promise already settled in state"+this.i);this.i=D,this.j=z,this.i===2&&this.K(),this.H()},p.prototype.K=function(){var D=this;C(function(){if(D.D()){var z=r.console;typeof z<"u"&&z.error(D.j)}},1)},p.prototype.D=function(){if(this.u)return!1;var D=r.CustomEvent,z=r.Event,Q=r.dispatchEvent;return typeof Q>"u"?!0:(typeof D=="function"?D=new D("unhandledrejection",{cancelable:!0}):typeof z=="function"?D=new z("unhandledrejection",{cancelable:!0}):(D=r.document.createEvent("CustomEvent"),D.initCustomEvent("unhandledrejection",!1,!0,D)),D.promise=this,D.reason=this.j,Q(D))},p.prototype.H=function(){if(this.h!=null){for(var D=0;D<this.h.length;++D)N.i(this.h[D]);this.h=null}};var N=new y;return p.prototype.L=function(D){var z=this.l();D.T(z.resolve,z.reject)},p.prototype.M=function(D,z){var Q=this.l();try{D.call(z,Q.resolve,Q.reject)}catch(ue){Q.reject(ue)}},p.prototype.then=function(D,z){function Q(De,ye){return typeof De=="function"?function(Ke){try{ue(De(Ke))}catch(at){_e(at)}}:ye}var ue,_e,qe=new p(function(De,ye){ue=De,_e=ye});return this.T(Q(D,ue),Q(z,_e)),qe},p.prototype.catch=function(D){return this.then(void 0,D)},p.prototype.T=function(D,z){function Q(){switch(ue.i){case 1:D(ue.j);break;case 2:z(ue.j);break;default:throw Error("Unexpected state: "+ue.i)}}var ue=this;this.h==null?N.i(Q):this.h.push(Q),this.u=!0},p.resolve=S,p.reject=function(D){return new p(function(z,Q){Q(D)})},p.race=function(D){return new p(function(z,Q){for(var ue=a(D),_e=ue.next();!_e.done;_e=ue.next())S(_e.value).T(z,Q)})},p.all=function(D){var z=a(D),Q=z.next();return Q.done?S([]):new p(function(ue,_e){function qe(Ke){return function(at){De[Ke]=at,ye--,ye==0&&ue(De)}}var De=[],ye=0;do De.push(void 0),ye++,S(Q.value).T(qe(De.length-1),_e),Q=z.next();while(!Q.done)})},p});function X(c,p){c instanceof String&&(c+="");var y=0,S=!1,C={next:function(){if(!S&&y<c.length){var N=y++;return{value:p(N,c[N]),done:!1}}return S=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.keys",function(c){return c||function(){return X(this,function(p){return p})}}),s("Array.prototype.fill",function(c){return c||function(p,y,S){var C=this.length||0;for(0>y&&(y=Math.max(0,C+y)),(S==null||S>C)&&(S=C),S=Number(S),0>S&&(S=Math.max(0,C+S)),y=Number(y||0);y<S;y++)this[y]=p;return this}});function k(c){return c||Array.prototype.fill}s("Int8Array.prototype.fill",k),s("Uint8Array.prototype.fill",k),s("Uint8ClampedArray.prototype.fill",k),s("Int16Array.prototype.fill",k),s("Uint16Array.prototype.fill",k),s("Int32Array.prototype.fill",k),s("Uint32Array.prototype.fill",k),s("Float32Array.prototype.fill",k),s("Float64Array.prototype.fill",k),s("Object.is",function(c){return c||function(p,y){return p===y?p!==0||1/p===1/y:p!==p&&y!==y}}),s("Array.prototype.includes",function(c){return c||function(p,y){var S=this;S instanceof String&&(S=String(S));var C=S.length;for(y=y||0,0>y&&(y=Math.max(y+C,0));y<C;y++){var N=S[y];if(N===p||Object.is(N,p))return!0}return!1}}),s("String.prototype.includes",function(c){return c||function(p,y){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(p instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(p,y||0)!==-1}});var Z=this||self;function ee(c,p){c=c.split(".");var y=Z;c[0]in y||typeof y.execScript>"u"||y.execScript("var "+c[0]);for(var S;c.length&&(S=c.shift());)c.length||p===void 0?y[S]&&y[S]!==Object.prototype[S]?y=y[S]:y=y[S]={}:y[S]=p}function H(c){var p;e:{if((p=Z.navigator)&&(p=p.userAgent))break e;p=""}return p.indexOf(c)!=-1}var $=Array.prototype.map?function(c,p){return Array.prototype.map.call(c,p,void 0)}:function(c,p){for(var y=c.length,S=Array(y),C=typeof c=="string"?c.split(""):c,N=0;N<y;N++)N in C&&(S[N]=p.call(void 0,C[N],N,c));return S},Y={},le=null;function pe(c){var p=c.length,y=3*p/4;y%3?y=Math.floor(y):"=.".indexOf(c[p-1])!=-1&&(y="=.".indexOf(c[p-2])!=-1?y-2:y-1);var S=new Uint8Array(y),C=0;return we(c,function(N){S[C++]=N}),C!==y?S.subarray(0,C):S}function we(c,p){function y(Q){for(;S<c.length;){var ue=c.charAt(S++),_e=le[ue];if(_e!=null)return _e;if(!/^[\s\xa0]*$/.test(ue))throw Error("Unknown base64 encoding at char: "+ue)}return Q}ze();for(var S=0;;){var C=y(-1),N=y(0),D=y(64),z=y(64);if(z===64&&C===-1)break;p(C<<2|N>>4),D!=64&&(p(N<<4&240|D>>2),z!=64&&p(D<<6&192|z))}}function ze(){if(!le){le={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),p=["+/=","+/","-_=","-_.","-_"],y=0;5>y;y++){var S=c.concat(p[y].split(""));Y[y]=S;for(var C=0;C<S.length;C++){var N=S[C];le[N]===void 0&&(le[N]=C)}}}}var Je=typeof Uint8Array<"u",te=!(H("Trident")||H("MSIE"))&&typeof Z.btoa=="function";function he(c){if(!te){var p;p===void 0&&(p=0),ze(),p=Y[p];for(var y=Array(Math.floor(c.length/3)),S=p[64]||"",C=0,N=0;C<c.length-2;C+=3){var D=c[C],z=c[C+1],Q=c[C+2],ue=p[D>>2];D=p[(D&3)<<4|z>>4],z=p[(z&15)<<2|Q>>6],Q=p[Q&63],y[N++]=ue+D+z+Q}switch(ue=0,Q=S,c.length-C){case 2:ue=c[C+1],Q=p[(ue&15)<<2]||S;case 1:c=c[C],y[N]=p[c>>2]+p[(c&3)<<4|ue>>4]+Q+S}return y.join("")}for(p="";10240<c.length;)p+=String.fromCharCode.apply(null,c.subarray(0,10240)),c=c.subarray(10240);return p+=String.fromCharCode.apply(null,c),btoa(p)}var Re=RegExp("[-_.]","g");function Se(c){switch(c){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Be(c){if(!te)return pe(c);Re.test(c)&&(c=c.replace(Re,Se)),c=atob(c);for(var p=new Uint8Array(c.length),y=0;y<c.length;y++)p[y]=c.charCodeAt(y);return p}var Xe;function et(){return Xe||(Xe=new Uint8Array(0))}var gt={},B=typeof Uint8Array.prototype.slice=="function",tt=0,je=0;function ht(c){var p=0>c;c=Math.abs(c);var y=c>>>0;c=Math.floor((c-y)/4294967296),p&&(y=a(wt(y,c)),p=y.next().value,c=y.next().value,y=p),tt=y>>>0,je=c>>>0}var Le=typeof BigInt=="function";function wt(c,p){return p=~p,c?c=~c+1:p+=1,[c,p]}function Ve(c,p){this.i=c>>>0,this.h=p>>>0}function Ye(c){if(!c)return F||(F=new Ve(0,0));if(!/^-?\d+$/.test(c))return null;if(16>c.length)ht(Number(c));else if(Le)c=BigInt(c),tt=Number(c&BigInt(4294967295))>>>0,je=Number(c>>BigInt(32)&BigInt(4294967295));else{var p=+(c[0]==="-");je=tt=0;for(var y=c.length,S=p,C=(y-p)%6+p;C<=y;S=C,C+=6)S=Number(c.slice(S,C)),je*=1e6,tt=1e6*tt+S,4294967296<=tt&&(je+=tt/4294967296|0,tt%=4294967296);p&&(p=a(wt(tt,je)),c=p.next().value,p=p.next().value,tt=c,je=p)}return new Ve(tt,je)}var F;function T(c,p){return Error("Invalid wire type: "+c+" (at position "+p+")")}function J(){return Error("Failed to read varint, encoding is invalid.")}function re(c,p){return Error("Tried to read past the end of the data "+p+" > "+c)}function se(){throw Error("Invalid UTF8")}function oe(c,p){return p=String.fromCharCode.apply(null,p),c==null?p:c+p}var Ce=void 0,xe,Ae=typeof TextDecoder<"u",$e,de=typeof TextEncoder<"u",Me;function st(c){if(c!==gt)throw Error("illegal external caller")}function Oe(c,p){if(st(p),this.V=c,c!=null&&c.length===0)throw Error("ByteString should be constructed with non-empty values")}function Ee(){return Me||(Me=new Oe(null,gt))}function Ge(c){st(gt);var p=c.V;return p=p==null||Je&&p!=null&&p instanceof Uint8Array?p:typeof p=="string"?Be(p):null,p==null?p:c.V=p}function nt(c){if(typeof c=="string")return{buffer:Be(c),C:!1};if(Array.isArray(c))return{buffer:new Uint8Array(c),C:!1};if(c.constructor===Uint8Array)return{buffer:c,C:!1};if(c.constructor===ArrayBuffer)return{buffer:new Uint8Array(c),C:!1};if(c.constructor===Oe)return{buffer:Ge(c)||et(),C:!0};if(c instanceof Uint8Array)return{buffer:new Uint8Array(c.buffer,c.byteOffset,c.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Mt(c,p){this.i=null,this.m=!1,this.h=this.j=this.l=0,G(this,c,p)}function G(c,p,y){y=y===void 0?{}:y,c.S=y.S===void 0?!1:y.S,p&&(p=nt(p),c.i=p.buffer,c.m=p.C,c.l=0,c.j=c.i.length,c.h=c.l)}Mt.prototype.reset=function(){this.h=this.l};function fe(c,p){if(c.h=p,p>c.j)throw re(c.j,p)}function ne(c){var p=c.i,y=c.h,S=p[y++],C=S&127;if(S&128&&(S=p[y++],C|=(S&127)<<7,S&128&&(S=p[y++],C|=(S&127)<<14,S&128&&(S=p[y++],C|=(S&127)<<21,S&128&&(S=p[y++],C|=S<<28,S&128&&p[y++]&128&&p[y++]&128&&p[y++]&128&&p[y++]&128&&p[y++]&128)))))throw J();return fe(c,y),C}function ie(c,p){if(0>p)throw Error("Tried to read a negative byte length: "+p);var y=c.h,S=y+p;if(S>c.j)throw re(p,c.j-y);return c.h=S,y}var me=[];function Ue(){this.h=[]}Ue.prototype.length=function(){return this.h.length},Ue.prototype.end=function(){var c=this.h;return this.h=[],c};function it(c,p,y){for(;0<y||127<p;)c.h.push(p&127|128),p=(p>>>7|y<<25)>>>0,y>>>=7;c.h.push(p)}function _t(c,p){for(;127<p;)c.h.push(p&127|128),p>>>=7;c.h.push(p)}function Dt(c,p){if(me.length){var y=me.pop();G(y,c,p),c=y}else c=new Mt(c,p);this.h=c,this.j=this.h.h,this.i=this.l=-1,this.setOptions(p)}Dt.prototype.setOptions=function(c){c=c===void 0?{}:c,this.ca=c.ca===void 0?!1:c.ca},Dt.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function lt(c){var p=c.h;if(p.h==p.j)return!1;c.j=c.h.h;var y=ne(c.h)>>>0;if(p=y>>>3,y&=7,!(0<=y&&5>=y))throw T(y,c.j);if(1>p)throw Error("Invalid field number: "+p+" (at position "+c.j+")");return c.l=p,c.i=y,!0}function Jt(c){switch(c.i){case 0:if(c.i!=0)Jt(c);else e:{c=c.h;for(var p=c.h,y=p+10,S=c.i;p<y;)if(!(S[p++]&128)){fe(c,p);break e}throw J()}break;case 1:c=c.h,fe(c,c.h+8);break;case 2:c.i!=2?Jt(c):(p=ne(c.h)>>>0,c=c.h,fe(c,c.h+p));break;case 5:c=c.h,fe(c,c.h+4);break;case 3:p=c.l;do{if(!lt(c))throw Error("Unmatched start-group tag: stream EOF");if(c.i==4){if(c.l!=p)throw Error("Unmatched end-group tag");break}Jt(c)}while(!0);break;default:throw T(c.i,c.j)}}var Yt=[];function Qi(){this.j=[],this.i=0,this.h=new Ue}function qt(c,p){p.length!==0&&(c.j.push(p),c.i+=p.length)}function Ii(c,p){if(p=p.R){qt(c,c.h.end());for(var y=0;y<p.length;y++)qt(c,Ge(p[y])||et())}}var dn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function yn(c,p){return dn?c[dn]|=p:c.A!==void 0?c.A|=p:(Object.defineProperties(c,{A:{value:p,configurable:!0,writable:!0,enumerable:!1}}),p)}function Kn(c,p){dn?c[dn]&&(c[dn]&=~p):c.A!==void 0&&(c.A&=~p)}function Rt(c){var p;return dn?p=c[dn]:p=c.A,p??0}function Ht(c,p){dn?c[dn]=p:c.A!==void 0?c.A=p:Object.defineProperties(c,{A:{value:p,configurable:!0,writable:!0,enumerable:!1}})}function Zn(c){return yn(c,1),c}function Ji(c,p){Ht(p,(c|0)&-51)}function pi(c,p){Ht(p,(c|18)&-41)}var er={};function mi(c){return c!==null&&typeof c=="object"&&!Array.isArray(c)&&c.constructor===Object}var R,W=[];Ht(W,23),R=Object.freeze(W);function q(c){if(Rt(c.o)&2)throw Error("Cannot mutate an immutable Message")}function K(c){var p=c.length;(p=p?c[p-1]:void 0)&&mi(p)?p.g=1:(p={},c.push((p.g=1,p)))}function j(c){var p=c.i+c.G;return c.B||(c.B=c.o[p]={})}function ce(c,p){return p===-1?null:p>=c.i?c.B?c.B[p]:void 0:c.o[p+c.G]}function ge(c,p,y,S){q(c),Te(c,p,y,S)}function Te(c,p,y,S){c.j&&(c.j=void 0),p>=c.i||S?j(c)[p]=y:(c.o[p+c.G]=y,(c=c.B)&&p in c&&delete c[p])}function be(c,p,y,S){var C=ce(c,p);Array.isArray(C)||(C=R);var N=Rt(C);if(N&1||Zn(C),S)N&2||yn(C,2),y&1||Object.freeze(C);else{S=!(y&2);var D=N&2;y&1||!D?S&&N&16&&!D&&Kn(C,16):(C=Zn(Array.prototype.slice.call(C)),Te(c,p,C))}return C}function He(c,p){var y=ce(c,p),S=y==null?y:typeof y=="number"||y==="NaN"||y==="Infinity"||y==="-Infinity"?Number(y):void 0;return S!=null&&S!==y&&Te(c,p,S),S}function We(c,p,y,S,C){c.h||(c.h={});var N=c.h[y],D=be(c,y,3,C);if(!N){var z=D;N=[];var Q=!!(Rt(c.o)&16);D=!!(Rt(z)&2);var ue=z;!C&&D&&(z=Array.prototype.slice.call(z));for(var _e=D,qe=0;qe<z.length;qe++){var De=z[qe],ye=p,Ke=!1;if(Ke=Ke===void 0?!1:Ke,De=Array.isArray(De)?new ye(De):Ke?new ye:void 0,De!==void 0){ye=De.o;var at=Ke=Rt(ye);D&&(at|=2),Q&&(at|=16),at!=Ke&&Ht(ye,at),ye=at,_e=_e||!!(2&ye),N.push(De)}}return c.h[y]=N,Q=Rt(z),p=Q|33,p=_e?p&-9:p|8,Q!=p&&(_e=z,Object.isFrozen(_e)&&(_e=Array.prototype.slice.call(_e)),Ht(_e,p),z=_e),ue!==z&&Te(c,y,z),(C||S&&D)&&yn(N,2),S&&Object.freeze(N),N}return C||(C=Object.isFrozen(N),S&&!C?Object.freeze(N):!S&&C&&(N=Array.prototype.slice.call(N),c.h[y]=N)),N}function Pe(c,p,y){var S=!!(Rt(c.o)&2);if(p=We(c,p,y,S,S),c=be(c,y,3,S),!(S||Rt(c)&8)){for(S=0;S<p.length;S++){if(y=p[S],Rt(y.o)&2){var C=Pn(y,!1);C.j=y}else C=y;y!==C&&(p[S]=C,c[S]=C.o)}yn(c,8)}return p}function rt(c,p,y){if(y!=null&&typeof y!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof y+": "+y);ge(c,p,y)}function Pt(c,p,y,S,C){q(c);var N=We(c,y,p,!1,!1);return y=S??new y,c=be(c,p,2,!1),C!=null?(N.splice(C,0,y),c.splice(C,0,y.o)):(N.push(y),c.push(y.o)),y.C()&&Kn(c,8),y}function Tt(c,p){return c??p}function It(c,p,y){return y=y===void 0?0:y,Tt(He(c,p),y)}var ut;function Ie(c){switch(typeof c){case"number":return isFinite(c)?c:String(c);case"object":if(c)if(Array.isArray(c)){if(Rt(c)&128)return c=Array.prototype.slice.call(c),K(c),c}else{if(Je&&c!=null&&c instanceof Uint8Array)return he(c);if(c instanceof Oe){var p=c.V;return p==null?"":typeof p=="string"?p:c.V=he(p)}}}return c}function Ot(c,p,y,S){if(c!=null){if(Array.isArray(c))c=dt(c,p,y,S!==void 0);else if(mi(c)){var C={},N;for(N in c)C[N]=Ot(c[N],p,y,S);c=C}else c=p(c,S);return c}}function dt(c,p,y,S){var C=Rt(c);S=S?!!(C&16):void 0,c=Array.prototype.slice.call(c);for(var N=0;N<c.length;N++)c[N]=Ot(c[N],p,y,S);return y(C,c),c}function gn(c){return c.ja===er?c.toJSON():Ie(c)}function gi(c,p){c&128&&K(p)}function en(c,p,y){if(y=y===void 0?pi:y,c!=null){if(Je&&c instanceof Uint8Array)return c.length?new Oe(new Uint8Array(c),gt):Ee();if(Array.isArray(c)){var S=Rt(c);return S&2?c:p&&!(S&32)&&(S&16||S===0)?(Ht(c,S|2),c):(c=dt(c,en,S&4?pi:y,!0),p=Rt(c),p&4&&p&2&&Object.freeze(c),c)}return c.ja===er?Ut(c):c}}function tr(c,p,y,S,C,N,D){if(c=c.h&&c.h[y]){if(S=Rt(c),S&2?S=c:(N=$(c,Ut),pi(S,N),Object.freeze(N),S=N),q(p),D=S==null?R:Zn([]),S!=null){for(N=!!S.length,c=0;c<S.length;c++){var z=S[c];N=N&&!(Rt(z.o)&2),D[c]=z.o}N=(N?8:0)|1,c=Rt(D),(c&N)!==N&&(Object.isFrozen(D)&&(D=Array.prototype.slice.call(D)),Ht(D,c|N)),p.h||(p.h={}),p.h[y]=S}else p.h&&(p.h[y]=void 0);Te(p,y,D,C)}else ge(p,y,en(S,N,D),C)}function Ut(c){return Rt(c.o)&2||(c=Pn(c,!0),yn(c.o,2)),c}function Pn(c,p){var y=c.o,S=[];yn(S,16);var C=c.constructor.h;if(C&&S.push(C),C=c.B,C){S.length=y.length,S.fill(void 0,S.length,y.length);var N={};S[S.length-1]=N}Rt(y)&128&&K(S),p=p||c.C()?pi:Ji,N=c.constructor,ut=S,S=new N(S),ut=void 0,c.R&&(S.R=c.R.slice()),N=!!(Rt(y)&16);for(var D=C?y.length-1:y.length,z=0;z<D;z++)tr(c,S,z-c.G,y[z],!1,N,p);if(C)for(var Q in C)tr(c,S,+Q,C[Q],!0,N,p);return S}function Wt(c,p,y){c==null&&(c=ut),ut=void 0;var S=this.constructor.i||0,C=0<S,N=this.constructor.h,D=!1;if(c==null){c=N?[N]:[];var z=48,Q=!0;C&&(S=0,z|=128),Ht(c,z)}else{if(!Array.isArray(c)||N&&N!==c[0])throw Error();var ue=z=yn(c,0);if((Q=(16&ue)!==0)&&((D=(32&ue)!==0)||(ue|=32)),C){if(128&ue)S=0;else if(0<c.length){var _e=c[c.length-1];if(mi(_e)&&"g"in _e){S=0,ue|=128,delete _e.g;var qe=!0,De;for(De in _e){qe=!1;break}qe&&c.pop()}}}else if(128&ue)throw Error();z!==ue&&Ht(c,ue)}this.G=(N?0:-1)-S,this.h=void 0,this.o=c;e:{if(N=this.o.length,S=N-1,N&&(N=this.o[S],mi(N))){this.B=N,this.i=S-this.G;break e}p!==void 0&&-1<p?(this.i=Math.max(p,S+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!C&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(y){p=Q&&!D&&!0,C=this.i;var ye;for(Q=0;Q<y.length;Q++)D=y[Q],D<C?(D+=this.G,(S=c[D])?rn(S,p):c[D]=R):(ye||(ye=j(this)),(S=ye[D])?rn(S,p):ye[D]=R)}}Wt.prototype.toJSON=function(){return dt(this.o,gn,gi)},Wt.prototype.C=function(){return!!(Rt(this.o)&2)};function rn(c,p){if(Array.isArray(c)){var y=Rt(c),S=1;!p||y&2||(S|=16),(y&S)!==S&&Ht(c,y|S)}}Wt.prototype.ja=er,Wt.prototype.toString=function(){return this.o.toString()};function nr(c,p,y){if(y){var S={},C;for(C in y){var N=y[C],D=N.ra;D||(S.J=N.xa||N.oa.W,N.ia?(S.aa=ac(N.ia),D=function(z){return function(Q,ue,_e){return z.J(Q,ue,_e,z.aa)}}(S)):N.ka?(S.Z=lc(N.da.P,N.ka),D=function(z){return function(Q,ue,_e){return z.J(Q,ue,_e,z.Z)}}(S)):D=S.J,N.ra=D),D(p,c,N.da),S={J:S.J,aa:S.aa,Z:S.Z}}}Ii(p,c)}var ir=Symbol();function es(c,p,y){return c[ir]||(c[ir]=function(S,C){return p(S,C,y)})}function rc(c){var p=c[ir];if(!p){var y=Ko(c);p=function(S,C){return cc(S,C,y)},c[ir]=p}return p}function nf(c){var p=c.ia;if(p)return rc(p);if(p=c.wa)return es(c.da.P,p,c.ka)}function rf(c){var p=nf(c),y=c.da,S=c.oa.U;return p?function(C,N){return S(C,N,y,p)}:function(C,N){return S(C,N,y)}}function sc(c,p){var y=c[p];return typeof y=="function"&&y.length===0&&(y=y(),c[p]=y),Array.isArray(y)&&(ns in y||ts in y||0<y.length&&typeof y[0]=="function")?y:void 0}function oc(c,p,y,S,C,N){p.P=c[0];var D=1;if(c.length>D&&typeof c[D]!="number"){var z=c[D++];y(p,z)}for(;D<c.length;){y=c[D++];for(var Q=D+1;Q<c.length&&typeof c[Q]!="number";)Q++;switch(z=c[D++],Q-=D,Q){case 0:S(p,y,z);break;case 1:(Q=sc(c,D))?(D++,C(p,y,z,Q)):S(p,y,z,c[D++]);break;case 2:Q=D++,Q=sc(c,Q),C(p,y,z,Q,c[D++]);break;case 3:N(p,y,z,c[D++],c[D++],c[D++]);break;case 4:N(p,y,z,c[D++],c[D++],c[D++],c[D++]);break;default:throw Error("unexpected number of binary field arguments: "+Q)}}return p}var Fs=Symbol();function ac(c){var p=c[Fs];if(!p){var y=qo(c);p=function(S,C){return uc(S,C,y)},c[Fs]=p}return p}function lc(c,p){var y=c[Fs];return y||(y=function(S,C){return nr(S,C,p)},c[Fs]=y),y}var ts=Symbol();function sf(c,p){c.push(p)}function of(c,p,y){c.push(p,y.W)}function af(c,p,y,S){var C=ac(S),N=qo(S).P,D=y.W;c.push(p,function(z,Q,ue){return D(z,Q,ue,N,C)})}function lf(c,p,y,S,C,N){var D=lc(S,N),z=y.W;c.push(p,function(Q,ue,_e){return z(Q,ue,_e,S,D)})}function qo(c){var p=c[ts];return p||(p=oc(c,c[ts]=[],sf,of,af,lf),ns in c&&ts in c&&(c.length=0),p)}var ns=Symbol();function cf(c,p){c[0]=p}function uf(c,p,y,S){var C=y.U;c[p]=S?function(N,D,z){return C(N,D,z,S)}:C}function hf(c,p,y,S,C){var N=y.U,D=rc(S),z=Ko(S).P;c[p]=function(Q,ue,_e){return N(Q,ue,_e,z,D,C)}}function df(c,p,y,S,C,N,D){var z=y.U,Q=es(S,C,N);c[p]=function(ue,_e,qe){return z(ue,_e,qe,S,Q,D)}}function Ko(c){var p=c[ns];return p||(p=oc(c,c[ns]={},cf,uf,hf,df),ns in c&&ts in c&&(c.length=0),p)}function cc(c,p,y){for(;lt(p)&&p.i!=4;){var S=p.l,C=y[S];if(!C){var N=y[0];N&&(N=N[S])&&(C=y[S]=rf(N))}if(!C||!C(p,c,S)){C=p,S=c,N=C.j,Jt(C);var D=C;if(!D.ca){if(C=D.h.h-N,D.h.h=N,D=D.h,C==0)C=Ee();else{if(N=ie(D,C),D.S&&D.m)C=D.i.subarray(N,N+C);else{D=D.i;var z=N;C=N+C,C=z===C?et():B?D.slice(z,C):new Uint8Array(D.subarray(z,C))}C=C.length==0?Ee():new Oe(C,gt)}(N=S.R)?N.push(C):S.R=[C]}}}return c}function uc(c,p,y){for(var S=y.length,C=S%2==1,N=C?1:0;N<S;N+=2)(0,y[N+1])(p,c,y[N]);nr(c,p,C?y[0]:void 0)}function is(c,p){return{U:c,W:p}}var Ln=is(function(c,p,y){if(c.i!==5)return!1;c=c.h;var S=c.i,C=c.h,N=S[C],D=S[C+1],z=S[C+2];return S=S[C+3],fe(c,c.h+4),D=(N<<0|D<<8|z<<16|S<<24)>>>0,c=2*(D>>31)+1,N=D>>>23&255,D&=8388607,ge(p,y,N==255?D?NaN:1/0*c:N==0?c*Math.pow(2,-149)*D:c*Math.pow(2,N-150)*(D+Math.pow(2,23))),!0},function(c,p,y){if(p=He(p,y),p!=null){_t(c.h,8*y+5),c=c.h;var S=+p;S===0?0<1/S?tt=je=0:(je=0,tt=2147483648):isNaN(S)?(je=0,tt=2147483647):(S=(y=0>S?-2147483648:0)?-S:S,34028234663852886e22<S?(je=0,tt=(y|2139095040)>>>0):11754943508222875e-54>S?(S=Math.round(S/Math.pow(2,-149)),je=0,tt=(y|S)>>>0):(p=Math.floor(Math.log(S)/Math.LN2),S*=Math.pow(2,-p),S=Math.round(8388608*S),16777216<=S&&++p,je=0,tt=(y|p+127<<23|S&8388607)>>>0)),y=tt,c.h.push(y>>>0&255),c.h.push(y>>>8&255),c.h.push(y>>>16&255),c.h.push(y>>>24&255)}}),ff=is(function(c,p,y){if(c.i!==0)return!1;var S=c.h,C=0,N=c=0,D=S.i,z=S.h;do{var Q=D[z++];C|=(Q&127)<<N,N+=7}while(32>N&&Q&128);for(32<N&&(c|=(Q&127)>>4),N=3;32>N&&Q&128;N+=7)Q=D[z++],c|=(Q&127)<<N;if(fe(S,z),128>Q)S=C>>>0,Q=c>>>0,(c=Q&2147483648)&&(S=~S+1>>>0,Q=~Q>>>0,S==0&&(Q=Q+1>>>0)),S=4294967296*Q+(S>>>0);else throw J();return ge(p,y,c?-S:S),!0},function(c,p,y){p=ce(p,y),p!=null&&(typeof p=="string"&&Ye(p),p!=null&&(_t(c.h,8*y),typeof p=="number"?(c=c.h,ht(p),it(c,tt,je)):(y=Ye(p),it(c.h,y.i,y.h))))}),pf=is(function(c,p,y){return c.i!==0?!1:(ge(p,y,ne(c.h)),!0)},function(c,p,y){if(p=ce(p,y),p!=null&&p!=null)if(_t(c.h,8*y),c=c.h,y=p,0<=y)_t(c,y);else{for(p=0;9>p;p++)c.h.push(y&127|128),y>>=7;c.h.push(1)}}),hc=is(function(c,p,y){if(c.i!==2)return!1;var S=ne(c.h)>>>0;c=c.h;var C=ie(c,S);if(c=c.i,Ae){var N=c,D;(D=xe)||(D=xe=new TextDecoder("utf-8",{fatal:!0})),c=C+S,N=C===0&&c===N.length?N:N.subarray(C,c);try{var z=D.decode(N)}catch(qe){if(Ce===void 0){try{D.decode(new Uint8Array([128]))}catch{}try{D.decode(new Uint8Array([97])),Ce=!0}catch{Ce=!1}}throw!Ce&&(xe=void 0),qe}}else{z=C,S=z+S,C=[];for(var Q=null,ue,_e;z<S;)ue=c[z++],128>ue?C.push(ue):224>ue?z>=S?se():(_e=c[z++],194>ue||(_e&192)!==128?(z--,se()):C.push((ue&31)<<6|_e&63)):240>ue?z>=S-1?se():(_e=c[z++],(_e&192)!==128||ue===224&&160>_e||ue===237&&160<=_e||((N=c[z++])&192)!==128?(z--,se()):C.push((ue&15)<<12|(_e&63)<<6|N&63)):244>=ue?z>=S-2?se():(_e=c[z++],(_e&192)!==128||(ue<<28)+(_e-144)>>30||((N=c[z++])&192)!==128||((D=c[z++])&192)!==128?(z--,se()):(ue=(ue&7)<<18|(_e&63)<<12|(N&63)<<6|D&63,ue-=65536,C.push((ue>>10&1023)+55296,(ue&1023)+56320))):se(),8192<=C.length&&(Q=oe(Q,C),C.length=0);z=oe(Q,C)}return ge(p,y,z),!0},function(c,p,y){if(p=ce(p,y),p!=null){var S=!1;if(S=S===void 0?!1:S,de){if(S&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(p))throw Error("Found an unpaired surrogate");p=($e||($e=new TextEncoder)).encode(p)}else{for(var C=0,N=new Uint8Array(3*p.length),D=0;D<p.length;D++){var z=p.charCodeAt(D);if(128>z)N[C++]=z;else{if(2048>z)N[C++]=z>>6|192;else{if(55296<=z&&57343>=z){if(56319>=z&&D<p.length){var Q=p.charCodeAt(++D);if(56320<=Q&&57343>=Q){z=1024*(z-55296)+Q-56320+65536,N[C++]=z>>18|240,N[C++]=z>>12&63|128,N[C++]=z>>6&63|128,N[C++]=z&63|128;continue}else D--}if(S)throw Error("Found an unpaired surrogate");z=65533}N[C++]=z>>12|224,N[C++]=z>>6&63|128}N[C++]=z&63|128}}p=C===N.length?N:N.subarray(0,C)}_t(c.h,8*y+2),_t(c.h,p.length),qt(c,c.h.end()),qt(c,p)}}),dc=is(function(c,p,y,S,C){if(c.i!==2)return!1;p=Pt(p,y,S),y=c.h.j,S=ne(c.h)>>>0;var N=c.h.h+S,D=N-y;if(0>=D&&(c.h.j=N,C(p,c,void 0,void 0,void 0),D=N-c.h.h),D)throw Error("Message parsing ended unexpectedly. Expected to read "+(S+" bytes, instead read "+(S-D)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return c.h.h=N,c.h.j=y,!0},function(c,p,y,S,C){if(p=Pe(p,S,y),p!=null)for(S=0;S<p.length;S++){var N=c;_t(N.h,8*y+2);var D=N.h.end();qt(N,D),D.push(N.i),N=D,C(p[S],c),D=c;var z=N.pop();for(z=D.i+D.h.length()-z;127<z;)N.push(z&127|128),z>>>=7,D.i++;N.push(z),D.i++}});function Zo(c){return function(p,y){e:{if(Yt.length){var S=Yt.pop();S.setOptions(y),G(S.h,p,y),p=S}else p=new Dt(p,y);try{var C=Ko(c),N=cc(new C.P,p,C);break e}finally{C=p.h,C.i=null,C.m=!1,C.l=0,C.j=0,C.h=0,C.S=!1,p.l=-1,p.i=-1,100>Yt.length&&Yt.push(p)}N=void 0}return N}}function $o(c){return function(){var p=new Qi;uc(this,p,qo(c)),qt(p,p.h.end());for(var y=new Uint8Array(p.i),S=p.j,C=S.length,N=0,D=0;D<C;D++){var z=S[D];y.set(z,N),N+=z.length}return p.j=[y],y}}function rr(c){Wt.call(this,c)}g(rr,Wt);var fc=[rr,1,pf,2,Ln,3,hc,4,hc];rr.prototype.l=$o(fc);function Qo(c){Wt.call(this,c,-1,mf)}g(Qo,Wt),Qo.prototype.addClassification=function(c,p){return Pt(this,1,rr,c,p),this};var mf=[1],gf=Zo([Qo,1,dc,fc]);function rs(c){Wt.call(this,c)}g(rs,Wt);var pc=[rs,1,Ln,2,Ln,3,Ln,4,Ln,5,Ln];rs.prototype.l=$o(pc);function mc(c){Wt.call(this,c,-1,_f)}g(mc,Wt);var _f=[1],vf=Zo([mc,1,dc,pc]);function Bs(c){Wt.call(this,c)}g(Bs,Wt);var gc=[Bs,1,Ln,2,Ln,3,Ln,4,Ln,5,Ln,6,ff],xf=Zo(gc);Bs.prototype.l=$o(gc);function _c(c,p,y){if(y=c.createShader(y===0?c.VERTEX_SHADER:c.FRAGMENT_SHADER),c.shaderSource(y,p),c.compileShader(y),!c.getShaderParameter(y,c.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+c.getShaderInfoLog(y));return y}function yf(c){return Pe(c,rr,1).map(function(p){var y=ce(p,1);return{index:y??0,qa:It(p,2),label:ce(p,3)!=null?Tt(ce(p,3),""):void 0,displayName:ce(p,4)!=null?Tt(ce(p,4),""):void 0}})}function Mf(c){return{x:It(c,1),y:It(c,2),z:It(c,3),visibility:He(c,4)!=null?It(c,4):void 0}}function Jo(c){return Pe(vf(c),rs,1).map(Mf)}function ea(c,p){this.i=c,this.h=p,this.m=0}function vc(c,p,y){return Sf(c,p),typeof c.h.canvas.transferToImageBitmap=="function"?Promise.resolve(c.h.canvas.transferToImageBitmap()):y?Promise.resolve(c.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(c.h.canvas):(c.j===void 0&&(c.j=document.createElement("canvas")),new Promise(function(S){c.j.height=c.h.canvas.height,c.j.width=c.h.canvas.width,c.j.getContext("2d",{}).drawImage(c.h.canvas,0,0,c.h.canvas.width,c.h.canvas.height),S(c.j)}))}function Sf(c,p){var y=c.h;if(c.s===void 0){var S=_c(y,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),C=_c(y,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),N=y.createProgram();if(y.attachShader(N,S),y.attachShader(N,C),y.linkProgram(N),!y.getProgramParameter(N,y.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+y.getProgramInfoLog(N));S=c.s=N,y.useProgram(S),C=y.getUniformLocation(S,"sampler0"),c.l={O:y.getAttribLocation(S,"aVertex"),N:y.getAttribLocation(S,"aTex"),ya:C},c.v=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,c.v),y.enableVertexAttribArray(c.l.O),y.vertexAttribPointer(c.l.O,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),c.u=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,c.u),y.enableVertexAttribArray(c.l.N),y.vertexAttribPointer(c.l.N,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),y.uniform1i(C,0)}S=c.l,y.useProgram(c.s),y.canvas.width=p.width,y.canvas.height=p.height,y.viewport(0,0,p.width,p.height),y.activeTexture(y.TEXTURE0),c.i.bindTexture2d(p.glName),y.enableVertexAttribArray(S.O),y.bindBuffer(y.ARRAY_BUFFER,c.v),y.vertexAttribPointer(S.O,2,y.FLOAT,!1,0,0),y.enableVertexAttribArray(S.N),y.bindBuffer(y.ARRAY_BUFFER,c.u),y.vertexAttribPointer(S.N,2,y.FLOAT,!1,0,0),y.bindFramebuffer(y.DRAW_FRAMEBUFFER?y.DRAW_FRAMEBUFFER:y.FRAMEBUFFER,null),y.clearColor(0,0,0,0),y.clear(y.COLOR_BUFFER_BIT),y.colorMask(!0,!0,!0,!0),y.drawArrays(y.TRIANGLE_FAN,0,4),y.disableVertexAttribArray(S.O),y.disableVertexAttribArray(S.N),y.bindBuffer(y.ARRAY_BUFFER,null),c.i.bindTexture2d(0)}function Ef(c){this.h=c}var Tf=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Af(c,p){return p+c}function xc(c,p){window[c]=p}function wf(c){var p=document.createElement("script");return p.setAttribute("src",c),p.setAttribute("crossorigin","anonymous"),new Promise(function(y){p.addEventListener("load",function(){y()},!1),p.addEventListener("error",function(){y()},!1),document.body.appendChild(p)})}function Rf(){return b(function(c){switch(c.h){case 1:return c.s=2,A(c,WebAssembly.instantiate(Tf),4);case 4:c.h=3,c.s=0;break;case 2:return c.s=0,c.l=null,c.return(!1);case 3:return c.return(!0)}})}function ta(c){if(this.h=c,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=c&&c.locateFile||Af,typeof window=="object")var p=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")p=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=p,c.options){p=a(Object.keys(c.options));for(var y=p.next();!y.done;y=p.next()){y=y.value;var S=c.options[y].default;S!==void 0&&(this.l[y]=typeof S=="function"?S():S)}}}i=ta.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function bf(c){var p,y,S,C,N,D,z,Q,ue,_e,qe;return b(function(De){switch(De.h){case 1:return c.ga?(p=c.h.files===void 0?[]:typeof c.h.files=="function"?c.h.files(c.l):c.h.files,A(De,Rf(),2)):De.return();case 2:if(y=De.i,typeof window=="object")return xc("createMediapipeSolutionsWasm",{locateFile:c.locateFile}),xc("createMediapipeSolutionsPackedAssets",{locateFile:c.locateFile}),D=p.filter(function(ye){return ye.data!==void 0}),z=p.filter(function(ye){return ye.data===void 0}),Q=Promise.all(D.map(function(ye){var Ke=Hs(c,ye.url);if(ye.path!==void 0){var at=ye.path;Ke=Ke.then(function(Lt){return c.overrideFile(at,Lt),Promise.resolve(Lt)})}return Ke})),ue=Promise.all(z.map(function(ye){return ye.simd===void 0||ye.simd&&y||!ye.simd&&!y?wf(c.locateFile(ye.url,c.ha)):Promise.resolve()})).then(function(){var ye,Ke,at;return b(function(Lt){if(Lt.h==1)return ye=window.createMediapipeSolutionsWasm,Ke=window.createMediapipeSolutionsPackedAssets,at=c,A(Lt,ye(Ke),2);at.i=Lt.i,Lt.h=0})}),_e=function(){return b(function(ye){return c.h.graph&&c.h.graph.url?ye=A(ye,Hs(c,c.h.graph.url),0):(ye.h=0,ye=void 0),ye})}(),A(De,Promise.all([ue,Q,_e]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return S=p.filter(function(ye){return ye.simd===void 0||ye.simd&&y||!ye.simd&&!y}).map(function(ye){return c.locateFile(ye.url,c.ha)}),importScripts.apply(null,l(S)),C=c,A(De,createMediapipeSolutionsWasm(Module),6);case 6:C.i=De.i,c.m=new OffscreenCanvas(1,1),c.i.canvas=c.m,N=c.i.GL.createContext(c.m,{antialias:!1,alpha:!1,va:typeof WebGL2RenderingContext<"u"?2:1}),c.i.GL.makeContextCurrent(N),De.h=4;break;case 7:if(c.m=document.createElement("canvas"),qe=c.m.getContext("webgl2",{}),!qe&&(qe=c.m.getContext("webgl",{}),!qe))return alert("Failed to create WebGL canvas context when passing video frame."),De.return();c.K=qe,c.i.canvas=c.m,c.i.createContext(c.m,!0,!0,{});case 4:c.j=new c.i.SolutionWasm,c.ga=!1,De.h=0}})}function Pf(c){var p,y,S,C,N,D,z,Q;return b(function(ue){if(ue.h==1){if(c.h.graph&&c.h.graph.url&&c.fa===c.h.graph.url)return ue.return();if(c.u=!0,!c.h.graph||!c.h.graph.url){ue.h=2;return}return c.fa=c.h.graph.url,A(ue,Hs(c,c.h.graph.url),3)}for(ue.h!=2&&(p=ue.i,c.j.loadGraph(p)),y=a(Object.keys(c.D)),S=y.next();!S.done;S=y.next())C=S.value,c.j.overrideFile(C,c.D[C]);if(c.D={},c.h.listeners)for(N=a(c.h.listeners),D=N.next();!D.done;D=N.next())z=D.value,Df(c,z);Q=c.l,c.l={},c.setOptions(Q),ue.h=0})}i.reset=function(){var c=this;return b(function(p){c.j&&(c.j.reset(),c.s={},c.v={}),p.h=0})},i.setOptions=function(c,p){var y=this;if(p=p||this.h.options){for(var S=[],C=[],N={},D=a(Object.keys(c)),z=D.next();!z.done;N={X:N.X,Y:N.Y},z=D.next())if(z=z.value,!(z in this.l&&this.l[z]===c[z])){this.l[z]=c[z];var Q=p[z];Q!==void 0&&(Q.onChange&&(N.X=Q.onChange,N.Y=c[z],S.push(function(ue){return function(){var _e;return b(function(qe){if(qe.h==1)return A(qe,ue.X(ue.Y),2);_e=qe.i,_e===!0&&(y.u=!0),qe.h=0})}}(N))),Q.graphOptionXref&&(z=Object.assign({},{calculatorName:"",calculatorIndex:0},Q.graphOptionXref,{valueNumber:Q.type===1?c[z]:0,valueBoolean:Q.type===0?c[z]:!1,valueString:Q.type===2?c[z]:""}),C.push(z)))}(S.length!==0||C.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(C),this.F=(this.F===void 0?[]:this.F).concat(S))}};function Lf(c){var p,y,S,C,N,D,z;return b(function(Q){switch(Q.h){case 1:if(!c.u)return Q.return();if(!c.F){Q.h=2;break}p=a(c.F),y=p.next();case 3:if(y.done){Q.h=5;break}return S=y.value,A(Q,S(),4);case 4:y=p.next(),Q.h=3;break;case 5:c.F=void 0;case 2:if(c.H){for(C=new c.i.GraphOptionChangeRequestList,N=a(c.H),D=N.next();!D.done;D=N.next())z=D.value,C.push_back(z);c.j.changeOptions(C),C.delete(),c.H=void 0}c.u=!1,Q.h=0}})}i.initialize=function(){var c=this;return b(function(p){return p.h==1?A(p,bf(c),2):p.h!=3?A(p,Pf(c),3):A(p,Lf(c),0)})};function Hs(c,p){var y,S;return b(function(C){return p in c.L?C.return(c.L[p]):(y=c.locateFile(p,""),S=fetch(y).then(function(N){return N.arrayBuffer()}),c.L[p]=S,C.return(S))})}i.overrideFile=function(c,p){this.j?this.j.overrideFile(c,p):this.D[c]=p},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(c,p){var y=this,S,C,N,D,z,Q,ue,_e,qe;return b(function(De){switch(De.h){case 1:return y.h.inputs?(S=1e3*(p??performance.now()),A(De,y.I,2)):De.return();case 2:return A(De,y.initialize(),3);case 3:for(C=new y.i.PacketDataList,N=a(Object.keys(c)),D=N.next();!D.done;D=N.next())if(z=D.value,Q=y.h.inputs[z]){e:{var ye=c[z];switch(Q.type){case"video":var Ke=y.s[Q.stream];if(Ke||(Ke=new ea(y.i,y.K),y.s[Q.stream]=Ke),Ke.m===0&&(Ke.m=Ke.i.createTexture()),typeof HTMLVideoElement<"u"&&ye instanceof HTMLVideoElement)var at=ye.videoWidth,Lt=ye.videoHeight;else typeof HTMLImageElement<"u"&&ye instanceof HTMLImageElement?(at=ye.naturalWidth,Lt=ye.naturalHeight):(at=ye.width,Lt=ye.height);Lt={glName:Ke.m,width:at,height:Lt},at=Ke.h,at.canvas.width=Lt.width,at.canvas.height=Lt.height,at.activeTexture(at.TEXTURE0),Ke.i.bindTexture2d(Ke.m),at.texImage2D(at.TEXTURE_2D,0,at.RGBA,at.RGBA,at.UNSIGNED_BYTE,ye),Ke.i.bindTexture2d(0),Ke=Lt;break e;case"detections":for(Ke=y.s[Q.stream],Ke||(Ke=new Ef(y.i),y.s[Q.stream]=Ke),Ke.data||(Ke.data=new Ke.h.DetectionListData),Ke.data.reset(ye.length),Lt=0;Lt<ye.length;++Lt){at=ye[Lt];var bt=Ke.data,Kt=bt.setBoundingBox,Mn=Lt,fn=at.la,ft=new Bs;if(rt(ft,1,fn.sa),rt(ft,2,fn.ta),rt(ft,3,fn.height),rt(ft,4,fn.width),rt(ft,5,fn.rotation),ge(ft,6,fn.pa),fn=ft.l(),Kt.call(bt,Mn,fn),at.ea)for(bt=0;bt<at.ea.length;++bt){ft=at.ea[bt],Kt=Ke.data,Mn=Kt.addNormalizedLandmark,fn=Lt,ft=Object.assign({},ft,{visibility:ft.visibility?ft.visibility:0});var Zt=new rs;rt(Zt,1,ft.x),rt(Zt,2,ft.y),rt(Zt,3,ft.z),ft.visibility&&rt(Zt,4,ft.visibility),ft=Zt.l(),Mn.call(Kt,fn,ft)}if(at.ba)for(bt=0;bt<at.ba.length;++bt)Kt=Ke.data,Mn=Kt.addClassification,fn=Lt,ft=at.ba[bt],Zt=new rr,rt(Zt,2,ft.qa),ft.index&&ge(Zt,1,ft.index),ft.label&&ge(Zt,3,ft.label),ft.displayName&&ge(Zt,4,ft.displayName),ft=Zt.l(),Mn.call(Kt,fn,ft)}Ke=Ke.data;break e;default:Ke={}}}switch(ue=Ke,_e=Q.stream,Q.type){case"video":C.pushTexture2d(Object.assign({},ue,{stream:_e,timestamp:S}));break;case"detections":qe=ue,qe.stream=_e,qe.timestamp=S,C.pushDetectionList(qe);break;default:throw Error("Unknown input config type: '"+Q.type+"'")}}return y.j.send(C),A(De,y.I,4);case 4:C.delete(),De.h=0}})};function Cf(c,p,y){var S,C,N,D,z,Q,ue,_e,qe,De,ye,Ke,at,Lt;return b(function(bt){switch(bt.h){case 1:if(!y)return bt.return(p);for(S={},C=0,N=a(Object.keys(y)),D=N.next();!D.done;D=N.next())z=D.value,Q=y[z],typeof Q!="string"&&Q.type==="texture"&&p[Q.stream]!==void 0&&++C;1<C&&(c.M=!1),ue=a(Object.keys(y)),D=ue.next();case 2:if(D.done){bt.h=4;break}if(_e=D.value,qe=y[_e],typeof qe=="string")return at=S,Lt=_e,A(bt,If(c,_e,p[qe]),14);if(De=p[qe.stream],qe.type==="detection_list"){if(De){for(var Kt=De.getRectList(),Mn=De.getLandmarksList(),fn=De.getClassificationsList(),ft=[],Zt=0;Zt<Kt.size();++Zt){var _i=xf(Kt.get(Zt)),Uf=It(_i,1),Nf=It(_i,2),Of=It(_i,3),Ff=It(_i,4),Bf=It(_i,5,0),zs=void 0;zs=zs===void 0?0:zs,_i={la:{sa:Uf,ta:Nf,height:Of,width:Ff,rotation:Bf,pa:Tt(ce(_i,6),zs)},ea:Jo(Mn.get(Zt)),ba:yf(gf(fn.get(Zt)))},ft.push(_i)}Kt=ft}else Kt=[];S[_e]=Kt,bt.h=7;break}if(qe.type==="proto_list"){if(De){for(Kt=Array(De.size()),Mn=0;Mn<De.size();Mn++)Kt[Mn]=De.get(Mn);De.delete()}else Kt=[];S[_e]=Kt,bt.h=7;break}if(De===void 0){bt.h=3;break}if(qe.type==="float_list"){S[_e]=De,bt.h=7;break}if(qe.type==="proto"){S[_e]=De,bt.h=7;break}if(qe.type!=="texture")throw Error("Unknown output config type: '"+qe.type+"'");return ye=c.v[_e],ye||(ye=new ea(c.i,c.K),c.v[_e]=ye),A(bt,vc(ye,De,c.M),13);case 13:Ke=bt.i,S[_e]=Ke;case 7:qe.transform&&S[_e]&&(S[_e]=qe.transform(S[_e])),bt.h=3;break;case 14:at[Lt]=bt.i;case 3:D=ue.next(),bt.h=2;break;case 4:return bt.return(S)}})}function If(c,p,y){var S;return b(function(C){return typeof y=="number"||y instanceof Uint8Array||y instanceof c.i.Uint8BlobList?C.return(y):y instanceof c.i.Texture2dDataOut?(S=c.v[p],S||(S=new ea(c.i,c.K),c.v[p]=S),C.return(vc(S,y,c.M))):C.return(void 0)})}function Df(c,p){for(var y=p.name||"$",S=[].concat(l(p.wants)),C=new c.i.StringList,N=a(p.wants),D=N.next();!D.done;D=N.next())C.push_back(D.value);N=c.i.PacketListener.implement({onResults:function(z){for(var Q={},ue=0;ue<p.wants.length;++ue)Q[S[ue]]=z.get(ue);var _e=c.listeners[y];_e&&(c.I=Cf(c,Q,p.outs).then(function(qe){qe=_e(qe);for(var De=0;De<p.wants.length;++De){var ye=Q[S[De]];typeof ye=="object"&&ye.hasOwnProperty&&ye.hasOwnProperty("delete")&&ye.delete()}qe&&(c.I=qe)}))}}),c.j.attachMultiListener(C,N),C.delete()}i.onResults=function(c,p){this.listeners[p||"$"]=c},ee("Solution",ta),ee("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"});function yc(c){switch(c===void 0&&(c=0),c){case 1:return"pose_landmark_full.tflite";case 2:return"pose_landmark_heavy.tflite";default:return"pose_landmark_lite.tflite"}}function Mc(c){var p=this;c=c||{},this.h=new ta({locateFile:c.locateFile,files:function(y){return[{url:"pose_solution_packed_assets_loader.js"},{simd:!1,url:"pose_solution_wasm_bin.js"},{simd:!0,url:"pose_solution_simd_wasm_bin.js"},{data:!0,url:yc(y.modelComplexity)}]},graph:{url:"pose_web.binarypb"},listeners:[{wants:["pose_landmarks","world_landmarks","segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},poseLandmarks:{type:"proto",stream:"pose_landmarks",transform:Jo},poseWorldLandmarks:{type:"proto",stream:"world_landmarks",transform:Jo},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(y){var S,C,N;return b(function(D){return D.h==1?(S=yc(y),C="third_party/mediapipe/modules/pose_landmark/"+S,A(D,Hs(p.h,S),2)):(N=D.i,p.h.overrideFile(C,N),D.return(!0))})}},smoothLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothLandmarks",fieldName:"bool_value"}},enableSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorEnableSegmentation",fieldName:"bool_value"}},smoothSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothSegmentation",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"poselandmarkgpu__posedetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"poselandmarkgpu__poselandmarkbyroigpu__tensorstoposelandmarksandsegmentation__ThresholdingCalculator",fieldName:"threshold"}}}})}i=Mc.prototype,i.reset=function(){this.h.reset()},i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(c){this.h.onResults(c)},i.initialize=function(){var c=this;return b(function(p){return A(p,c.h.initialize(),0)})},i.send=function(c,p){var y=this;return b(function(S){return A(S,y.h.send(c,p),0)})},i.setOptions=function(c){this.h.setOptions(c)},ee("Pose",Mc),ee("POSE_CONNECTIONS",[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]]),ee("POSE_LANDMARKS",{NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,LEFT_RIGHT:9,RIGHT_LEFT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32}),ee("POSE_LANDMARKS_LEFT",{LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,LEFT_EAR:7,LEFT_RIGHT:9,LEFT_SHOULDER:11,LEFT_ELBOW:13,LEFT_WRIST:15,LEFT_PINKY:17,LEFT_INDEX:19,LEFT_THUMB:21,LEFT_HIP:23,LEFT_KNEE:25,LEFT_ANKLE:27,LEFT_HEEL:29,LEFT_FOOT_INDEX:31}),ee("POSE_LANDMARKS_RIGHT",{RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,RIGHT_EAR:8,RIGHT_LEFT:10,RIGHT_SHOULDER:12,RIGHT_ELBOW:14,RIGHT_WRIST:16,RIGHT_PINKY:18,RIGHT_INDEX:20,RIGHT_THUMB:22,RIGHT_HIP:24,RIGHT_KNEE:26,RIGHT_ANKLE:28,RIGHT_HEEL:30,RIGHT_FOOT_INDEX:32}),ee("POSE_LANDMARKS_NEUTRAL",{NOSE:0}),ee("VERSION","0.5.1675469404")}).call(ci);function OS(){const i=Vs.useRef(null),e=Vs.useRef(null);let t=i.current,n=e.current;const r=Vs.useRef(null);let s;const o=new ax({alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(window.devicePixelRatio);const a=new ln(35,window.innerWidth/window.innerHeight,.1,1e3);a.position.set(0,1.4,3);const l=new lx,u=new yS(a,o.domElement);u.screenSpacePanning=!0,u.target.set(0,1.4,0),u.update();const d=new Ad(16777215);d.position.set(1,1,1).normalize(),l.add(d);const h=new Nx;function f(){requestAnimationFrame(f),s&&s.update(h.getDelta()),o.render(l,a)}f();const _=new BM;_.crossOrigin="anonymous";const v=new mn;_.register(O=>new IM(O,{helperRoot:v})),_.load("https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2FAshtra.vrm?v=1630342336981",O=>{Os.removeUnnecessaryJoints(O.scene);const L=O.userData.vrm;l.add(L.scene),s=L,s.scene.rotation.y=Math.PI},O=>console.log("Loading model...",100*(O.loaded/O.total),"%"),O=>console.error(O));const x=(O,L={x:0,y:0,z:0},I=1,V=.3)=>{if(!s)return;const P=s.humanoid.getNormalizedBoneNode(O);if(!P){console.log("Part not found");return}let M=new bn(L.x*I,L.y*I,L.z*I),b=new Qe().setFromEuler(M);P.quaternion.slerp(b,V)},g=(O,L={x:0,y:0,z:0},I=1,V=.3)=>{if(!s)return;const P=s.humanoid.getNormalizedBoneNode(O);if(!P)return;let M=new U(L.x*I,L.y*I,L.z*I);P.position.lerp(M,V)},m=(O,L)=>{if(!O){console.log("vrm not found");return}let I;const V=L.poseWorldLandmarks,P=L.poseLandmarks;P&&V&&(I=Yo.solve(V,P,{runtime:"mediapipe",video:t}),I&&(x(En.Hips,I.Hips.rotation,.7),g(En.Hips,{x:I.Hips.position.x,y:I.Hips.position.y+1,z:-I.Hips.position.z},1,.07),x(En.Chest,I.Spine,.25,.3),x(En.Spine,I.Spine,.45,.3),x(En.RightUpperArm,I.RightUpperArm,1,.3),x(En.RightLowerArm,I.RightLowerArm,1,.3),x(En.LeftUpperArm,I.LeftUpperArm,1,.3),x(En.LeftLowerArm,I.LeftLowerArm,1,.3),x(En.LeftUpperLeg,I.LeftUpperLeg,1,.3),x(En.LeftLowerLeg,I.LeftLowerLeg,1,.3),x(En.RightUpperLeg,I.RightUpperLeg,1,.3),x(En.RightLowerLeg,I.RightLowerLeg,1,.3)))},w=O=>{A(O),m(s,O)},E=new Fh.Pose({locateFile:O=>O.startsWith("pose")?`https://cdn.jsdelivr.net/npm/@mediapipe/pose/${O}`:`https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${O}`});E.setOptions({modelComplexity:1,smoothLandmarks:!0,enableSegmentation:!1,smoothSegmentation:!1,minDetectionConfidence:.2,minTrackingConfidence:.2}),E.onResults(w);const A=O=>{if(n&&t){n.width=t.videoWidth,n.height=t.videoHeight;let L=n.getContext("2d");L&&(L.save(),L.clearRect(0,0,n.width,n.height),xs.drawConnectors(L,O.poseLandmarks,Fh.POSE_CONNECTIONS,{color:"#00cff7",lineWidth:4}),xs.drawLandmarks(L,O.poseLandmarks,{color:"#ff0364",lineWidth:2}),O.faceLandmarks&&O.faceLandmarks.length===478&&xs.drawLandmarks(L,[O.faceLandmarks[468],O.faceLandmarks[473]],{color:"#ffe603",lineWidth:2}),xs.drawLandmarks(L,O.leftHandLandmarks,{color:"#00cff7",lineWidth:2}),xs.drawLandmarks(L,O.rightHandLandmarks,{color:"#ff0364",lineWidth:2}))}else console.log("guide canvas not found")};return Vs.useEffect(()=>{n=e.current,t=i.current,r.current&&r.current.appendChild(o.domElement);const O=i.current;O&&new NS.Camera(O,{onFrame:async()=>{await E.send({image:O})},width:640,height:480}).start()},[]),Gn.jsxs("div",{children:[Gn.jsxs("div",{children:[Gn.jsx("p",{children:"Kalido on React"}),Gn.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:10},children:[Gn.jsx("video",{ref:i,style:{zIndex:9,width:100,height:70}}),Gn.jsx("canvas",{ref:e,style:{width:300,height:210,marginLeft:10}})]})]}),Gn.jsx("div",{id:"drawAreaa",ref:r,style:{width:300,height:210,marginLeft:10}})]})}function FS(){return Gn.jsx(Gn.Fragment,{children:Gn.jsx(OS,{})})}const HS=FS;export{HS as Component};
