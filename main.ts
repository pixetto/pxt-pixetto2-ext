//% weight=111 color=#A88002 icon="\uf030" block="VIA Pixetto" 
namespace pixetto {

    export enum PixColorType {
        //% block="red"
        RED=1,
        //% block="yellow"
        YELLOW,
        //% block="green"
        GREEN,
        //% block="blue"
        BLUE,
        //% block="purple"
        PURPLE,
        //% block="black"
        BLACK
    }
    
    export enum PixShapeType {
        //% block="circle"
        CIRCLE=1,
        //% block="rectangle"
        RECTANGLE,
        //% block="triangle"
        TRIANGLE,
        //% block="pentagon"
        PENTAGON,
    }

    export enum PixTrafficSign {
        //% block="no entre"
        SIGN_NO_ENTRE = 0,
        //% block="no left turn"
		SIGN_NO_LEFT_TURN,
		//% block="no right turn"
		SIGN_NO_RIGHT_TURN,
		//% block="wrong way"
		SIGN_WRONG_WAY,
		//% block="no U turn"
		SIGN_NO_U_TURN,
		//% block="maximum speed limit"
		SIGN_MAX_SPEED,
		//% block="one-way traffic"
		SIGN_ONEWAY_TRAFFIC,
		//% block="left turn"
		SIGN_LEFT_TURN,
		//% block="right turn"
		SIGN_RIGHT_TURN,
		//% block="minimum speed limit"
		SIGN_MIN_SPEED,
		//% block="u turn"
		SIGN_U_TURN,
		//% block="tunnel ahead"
		SIGN_TUNNEL_AHEAD,
		//% block="beware of children"
		SIGN_BEWARE_OF_CHILDREN,
		//% block="roundabout"
		SIGN_ROUNDABOUT,
		//% block="yield to pedestrian"
		SIGN_YIELD_TO_PEDESTRIAN,
		//% block="red light"
		SIGN_RED_LIGHT,
		//% block="green light"
		SIGN_GREEN_LIGHT
    }
	
	export enum PixTemplate {
		//% block="1"
		Template_1=1,
		//% block="2"
		Template_2,
		//% block="3"
		Template_3
	}
	
    export enum PixHandDigit {
        //% block="0"
        Digit_0,
        //% block="1"
        Digit_1,
        //% block="2"
        Digit_2,
        //% block="3"
        Digit_3,
        //% block="4"
        Digit_4,
        //% block="5"
        Digit_5,
        //% block="6"
        Digit_6,
        //% block="7"
        Digit_7,
        //% block="8"
        Digit_8,
        //% block="9"
        Digit_9
    }
       
    export enum PixHandLetter {
		//% block="Aa"
		A=0,
		//% block="Bb"
		B,
		//% block="Cc"
		C,
		//% block="Dd"
		D,
		//% block="Ee"
		E,
		//% block="Ff"
		F,
		//% block="Gg"
		G,
		//% block="Hh"
		H,
		//% block="Ii"
		I,
		//% block="Jj"
		J,
		//% block="Kk"
		K,
		//% block="Ll"
		L,
		//% block="Mm"
		M,
		//% block="Nn"
		N,
		//% block="Oo"
		O,
		//% block="Pp"
		P,
		//% block="Qq"
		Q,
		//% block="Rr"
		R,
		//% block="Ss"
		S,
		//% block="Tt"
		T,
		//% block="Uu"
		U,
		//% block="Vv"
		V,
		//% block="Ww"
		W,
		//% block="Xx"
		X,
		//% block="Yy"
		Y,
		//% block="Zz"
		Z
    }
      
    export enum PixVoiceCommand {
		//% block="你好"
		VOICE_Hello = 1,
		//% block="謝謝"
		VOICE_Thanks,
		//% block="再見"
		VOICE_Bye,
		//% block="這是甚麼"
		VOICE_WhatsThis,
		//% block="現在幾點"
		VOICE_WhatTime,
		//% block="我幾歲"
		VOICE_HowOld,
		//% block="今天星期幾"
		VOICE_WhatDay,
		//% block="講故事"
		VOICE_TellStory,
		//% block="說笑話"
		VOICE_TellJoke,
		//% block="念唐詩"
		VOICE_ReadPoem,
		//% block="開燈"
		VOICE_TurnOnLight,
		//% block="關燈"
		VOICE_TurnOffLight,
		//% block="左轉"
		VOICE_TurnLeft,
		//% block="右轉"
		VOICE_TurnRight,
		//% block="前進"
		VOICE_GoAhead,
		//% block="後退"
		VOICE_MoveBack,
		//% block="停止"
		VOICE_Stop,
		//% block="開啟"
		VOICE_Open,
		//% block="關閉"
		VOICE_Close,
		//% block="睜開眼睛"
		VOICE_OpenEyes1,
		//% block="睜眼"
		VOICE_OpenEyes2,
		//% block="閉上眼睛"
		VOICE_CloseEyes1,
		//% block="閉眼"
		VOICE_CloseEyes2,
		//% block="跳一下"
		VOICE_Jump,
		//% block="起立"
		VOICE_StandUp,
		//% block="蹲下"
		VOICE_SquatDown,
		//% block="這是什麼顏色"
		VOICE_WhatColor,
		//% block="這是什麼形狀"
		VOICE_WhatShape,
		//% block="顏色偵測"
		VOICE_ColorDetect,
		//% block="顏色組合偵測"
		VOICE_ColorCode,
		//% block="形狀偵測"
		VOICE_ShapeDetect,
		//% block="球體偵測"
		VOICE_ShpereDetect,
		//% block="模板匹配"
		VOICE_Template,
		//% block="特徵點偵測"
		VOICE_Keypoints,
		//% block="神經網路辨識"
		VOICE_NeuralNetwork,
		//% block="交通標誌辨識"
		VOICE_TrafficSign,
		//% block="手寫數字辨識"
		VOICE_HandDigits,
		//% block="手寫字母辨識"
		VOICE_HandLetters,
		//% block="數字運算"
		VOICE_DigitsOp,
		//% block="車道偵測"
		VOICE_Lanes,
		//% block="人臉偵測"
		VOICE_Face,
		//% block="遠端運算"
		VOICE_RemoteComputing,
		//% block="簡易分類器"
		VOICE_SimpleClassifier,
		//% block="自動駕駛"
		VOICE_AutoDrive,
		//% block="停止偵測功能"
		VOICE_StopDetect		
    }
    
	//% block="initialize vision sensor RX %rx TX %tx"
	//% shim=pixetto::begin
	//% weight=100
	export function begin(rx: PixSerialPin, tx: PixSerialPin): boolean {
		return false
    }
    
	//% block="enable function %func"
	//% shim=pixetto::enableFunc
	//% weight=99
	export function enableFunc(func: PixFunction): void {
		return;
    }
    
    //% block="object is detected"
    //% shim=pixetto::isDetected
    //% weight=95
    export function isDetected(): boolean {
		return false;
    }
    
    //% block="current function is %func_id"
    //% shim=pixetto::getFuncID
    //% weight=90
    export function getFuncID(func_id: PixFunction): boolean {
        return false;
    }

    //% block="object type"
    //% shim=pixetto::getTypeID
    //% weight=89
    export function getTypeID(): number {
        return 0;
    }

    //% block="object position x"
    //% shim=pixetto::getPosX
    //% weight=88
    export function getPosX(): number {
        return 0;
    }
    
    //% block="object position y"
    //% shim=pixetto::getPosY
    //% weight=87
    export function getPosY(): number {
        return 0;
    }

    //% block="object width"
    //% shim=pixetto::getWidth
    //% weight=86
    export function getWidth(): number {
        return 0;
    }

    //% block="object height"
    //% shim=pixetto::getHeight
    //% weight=85
    export function getHeight(): number {
        return 0;
    }

    //% block="color detection detects color %color"
    //% shim=pixetto::get_colordetect_color
    //% weight=80
    export function get_colordetect_color(color: PixColorType): boolean {
        return false;
    }
    
    //% block="shape detection detects shape %shape"
    //% shim=pixetto::get_shapedetect_shape
    //% weight=79
    export function get_shapedetect_shape(shape: PixShapeType): boolean {
        return false;
    }

    //% block="sphere detection detects color %color"
    //% shim=pixetto::get_spheredetect_color
    //% weight=78
    export function get_spheredetect_color(color: PixColorType): boolean {
        return false;
    }

    //% block="Template Matching detects %id"
    //% shim=pixetto::get_template_id
    //% weight=77
    export function get_template_id(id: PixTemplate): boolean {
        return false;
    }

    //% block="keypoint detects %id"
    //% shim=pixetto::get_keypoint_id
    //% weight=76
    export function get_keypoint_id(id: PixTemplate): boolean {
        return false;
    }

    //% block="neural network detects %id"
    //% shim=pixetto::get_nn_id
    //% weight=75
    export function get_nn_id(id: number): boolean {
        return false;
    }

    //% block="traffic sign detection detects %sign"
    //% shim=pixetto::get_traffic_sign
    //% weight=74
    export function get_traffic_sign(sign: PixTrafficSign): boolean {
        return false;
    }

    //% block="handwritten digits detection detects %digit"
    //% shim=pixetto::get_hand_digit
    //% weight=73
    export function get_hand_digit(digit: PixHandDigit): boolean {
        return false;
    }

    //% block="handwritten lettes detection detects %letter"
    //% shim=pixetto::get_hand_letter
    //% weight=72
    export function get_hand_letter(letter: PixHandLetter): boolean {
        return false;
    }

    //% block="remote computing detects %id"
    //% shim=pixetto::get_remote_computing
    //% weight=71
    export function get_remote_computing(id: number): boolean {
        return false;
    }
    
    //% block="simple classifier detects %id"
    //% shim=pixetto::get_simple_classifier
    //% weight=70
    export function get_simple_classifier(id: number): boolean {
        return false;
    }

    //% block="voice command detects %vcmd"
    //% shim=pixetto::get_voice_command
    //% weight=69
    export function get_voice_command(vcmd: PixVoiceCommand): boolean {
        return false;
    }

    //% block="apriltag |%number1"
    //% shim=pixetto::getApriltagField
    //% weight=60
    export function getApriltagField(number1: PixApriltagField): number {
        return 0;
    }

    //% block="lanes detection |%number1"
    //% shim=pixetto::getLanesField
    //% weight=59
    export function getLanesField(number1: PixLanesField): number {
        return 0;
    }

    //% block="digital operation answer"
    //% shim=pixetto::getEquationAnswer
    //% weight=55
    export function getEquationAnswer(): number {
        return 0;
    }

    //% block="digital operation expression"
    //% shim=pixetto::getEquationExpr
    //% weight=54
    export function getEquationExpr() {
        return 0;
    }
    
    //% block="test function"
    //% shim=pixetto::isTested
    //% weight=0
    export function isTested(): number {
		return 0;
    }
    
	//% block="test initialize vision sensor RX %rx TX %tx"
	//% shim=pixetto::test_begin
	//% weight=1
	export function test_begin(rx: PixSerialPin, tx: PixSerialPin): number {
		return 0;
    }

}
