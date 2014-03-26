var sy : GameObject;
var n2 : AudioClip;
var n3 : AudioClip;
var n4 : AudioClip;
var n5 : AudioClip;
var k : AudioClip;
var ifAsked : boolean = false;
private var timer : float = 0;
private var lastPlay : float = 0;

function Start () {
	Screen.showCursor = false;
	
}

function Update () {
	if (ifAsked) timer += Time.deltaTime;
	lastPlay += Time.deltaTime;
	if(lastPlay > 5) {
		if (Time.time < 20) audio.clip = n3;
		else if (Time.time < 35) audio.clip = n2;
		else if (Time.time < 45) audio.clip = n4;
		else if (Time.time < 50) audio.clip = n5;
		else if (Time.time < 55) audio.clip = k;
		else Application.Quit();
		if ((!audio.isPlaying)&&(Time.time < 55)) {
			audio.Play(); 
			lastPlay = 0;
		}
	}
}

function OnGUI () {
	if (Time.time > 5) {
		if (!ifAsked) {
			GUI.Label(Rect(Screen.width/2 - 50, Screen.height/2,100,30),"按任意键问话");
			if (Input.anyKey) {
				Wenhua ();
				ifAsked = true; 
				}
		}
		else {
			if (timer > 5) {
				GUI.Label(Rect(Screen.width/2 - 50, Screen.height/2,100,30),"按任意键开门");
				if (Input.anyKey) Application.Quit();
				}
		}
	}
}

function Wenhua () {
	if(!sy.GetComponent(AudioSource).isPlaying) sy.GetComponent(AudioSource).Play(); 
}