<!DOCTYPE html>
<html>
   <head>
      <meta name = "viewport" content = "width = device-width, initial-scale = 1">
      <link rel = "stylesheet" href = "https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
      <script src = "https://code.jquery.com/jquery-1.11.3.min.js"></script>

        <!-- this fixes issue where button maintains pressed state if validation precents page change 
        <script type="text/javascript">
            $(document).bind('mobileinit', function () {
                $.mobile.activeBtnClass = 'aBtnSelector';
            });
        </script>
-->

      <script src = "https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
      <script src="//cdn.jsdelivr.net/particle-api-js/6.4.2/particle.min.js" type="text/javascript"></script>
      


      <style>
         #myspan {
          font-family: 'IBM Plex Mono', monospace;
          background-color: #F7F4F3;
          color: #000000;
         /* resize: none;
          height: 600px;*/
          height: 200px;
          padding: 1rem 1rem;
          overflow: auto;
        }
        
        #logSection {
          font-family: 'IBM Plex Mono', monospace;
          background-color: #F7F4F3;
          color: #000000;
         /* resize: none;
          height: 600px;*/
          height: 200px;
          padding: 1rem 1rem;
          overflow: scroll;
        }

      </style>
      
      

   </head>
   
   <body>

    
    <!-- Login Page -->
      <div data-role = "page" id="Login" data-theme="a">
       <div data-role="header" data-theme="b">
            <h1>NexDoor</h1>
        </div><!-- /header -->
        <div role="main" class="ui-content">
            <h3>Sign In</h3>
            <label for="txt-email">Email Address</label>
            <input type="email" name="txt-email" id="txt-email" value="">
            <label for="txt-password">Password</label>
            <input type="password" name="txt-password" id="txt-password" value="">
            <!-- this can be implemented later
            <fieldset data-role="controlgroup">
                <input type="checkbox" name="chck-rememberme" id="chck-rememberme" checked="">
                <label for="chck-rememberme">Remember me</label>
            </fieldset>
            -->
            <a href="#" id="btnLogin" class="ui-btn ui-btn-b ui-corner-all mc-top-margin-1-5">Submit</a>

            <!--
            <p class="mc-top-margin-1-5"><a href="begin-password-reset.html">Can't access your account?</a></p>
            -->
            <div data-role="popup" id="dlg-invalid-credentials" data-dismissible="false" style="max-width:400px;">
                <div role="main" class="ui-content">
                    <h3 class="mc-text-danger">Login Failed</h3>
                    <p>Did you enter the right credentials?</p>
                    <div class="mc-text-center"><a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-b mc-top-margin-1-5">OK</a></div>
                </div>
            </div>
        </div><!-- /content -->
     </div>
    <!-- End Login Page -->
     

      <div data-role = "page" id="Home" data-theme="a">
<!--
         <div data-role = "header">
            <h2>NexDoor Controller</h2>
         </div>
-->
        <div data-role="header"  data-theme="b"  data-position="fixed" >
        	<h1>&nbsp;</h1>
        	<a href="#two" data-icon="gear" class="ui-btn-right">Configure</a>
        </div> <!-- /header -->       

      
      
      
         <div data-role = "main" class = "ui-content">
            <form method = "post" action="#">
               

                <div class="ui-field-contain">
                   <label for = "selDevice">Device</label>
                   <select name = "selDevice" id = "selDevice"  class="DeviceSelectionContainer" onchange="isDeviceAvailable(this)" >
            		<option>Select a device...</option>
                   </select>
                </div>

                <div class="ui-field-contain">
                    <label name="DeviceStatus" id="DeviceStatus">Device Status</label>
                </div>

<!--  for testing login stuff
<input type="button" id="login" name="login" />
-->
        <div id="dcalc" name="dcalc" class="dcalc">
                    
                   
                    

                <div class="containing-element">
                <div class="ui-field-contain">
                	<label for="cb1">Fan control</label>
                	<select name="cb1" id="cb1" data-role="slider">
                		<option value="0">Off</option>
                		<option value="1">On</option>
                	</select>
                </div>
                </div>
                
                <div class="containing-element">
                 <div class="ui-field-contain">
                	<label for="cb2">Baffel Position</label>
                	<select name="cb2" id="cb2" data-role="slider">
                		<option value="c">Closed</option>
                		<option value="o">Open</option>
                	</select>
                </div>
                </div>
                
                
                <div class="ui-field-contain">
                    <fieldset data-role="controlgroup" data-type="horizontal">
                    	<legend>Fan Speed</legend>
                         	<input type="radio" name="rbFanSpeed" id="rbFanSpeed1" value="l" />
                         	<label for="rbFanSpeed1">Low</label>
                
                         	<input type="radio" name="rbFanSpeed" id="rbFanSpeed2" value="m"  />
                         	<label for="rbFanSpeed2">Medium</label>
                
                         	<input type="radio" name="rbFanSpeed" id="rbFanSpeed3" value="h" />
                         	<label for="rbFanSpeed3">High</label>
                    </fieldset>
                </div>


             <!-- weather and AQI -->

                <h3>Weather and AQI from Device</h3>
                          
            	<div class="ui-field-contain">
                   	<!-- Temperature -->
                       <label for = "lblTemp">Temperature</label>
                       <input type = "text" name = "lblTemp" id = "lblTemp" readonly >
                </div>
            
            	<div class="ui-field-contain">
            		<!-- humidity -->
                       	<label for = "lblHumid">Humidity</label>
                        <input type = "text" name = "lblHumid" id = "lblHumid" readonly>
                </div>
            
            	<div class="ui-field-contain">
            		<!-- LstWeatherUpdate -->
                        <label for = "lblWeatherRefresh">Last Weather Refresh</label>
                        <input type = "text" name = "lblWeatherRefresh" id = "lblWeatherRefresh" readonly >
                </div>
            
<!--
these are the styles for AQI

Good  style="background-color:#0C0;color:#000;" 
Moderate   style="background-color:#FFFF00;color:#000;"
Unhealthy for Sensitive Groups  style="background-color:#FF9900;color:#000;"
Unhealthy  style="background-color:#FF0000;color:#FFF;"
Very Unhealthy  style="background-color:#990066;color:#FFF;"
Hazzardous   style="background-color:#660000;color:#FFF;"

-->
            	<div class="ui-field-contain">
            		<!-- PM25 -->
                        <label for = "lblPM25">PM 2.5</label>
                        <input type = "text" name = "lblPM25" id = "lblPM25" readonly value="Good" style="color:white;background:#0C0;">
                </div>
            
            	<div class="ui-field-contain">
            		<!-- PM10 -->
                        <label for = "lblPM10">PM 10</label>
                        <input type = "text" name = "lblPM10" id = "lblPM10" readonly value="Moderate" style="color:white;background:#FFFF00;">
                </div>
            
            	<div class="ui-field-contain">
            		<!-- Ozone -->
                        <label for = "lblO3">Ozone</label>
                        <input type = "text" name = "lblO3" id = "lbl)3" readonly value="Unhealthy" style="color:white;background:#FF0000;">
                </div>
            
            	<div class="ui-field-contain">
            		<!-- LstAQIUpdate -->
                        <label for = "lblAQIRefresh">Last AQI Refresh</label>
                        <input type = "text" name = "lblAQIRefresh" id = "lblAQIRefresh" readonly>
            
                </div>
            
            <!-- End weather and AQI -->


                <h3>Status</h3>
                
                <div data-role="tabs" id="tabs">
                  <div data-role="navbar">
                    <ul>
                      <li><a href="#status" data-ajax="false">Status</a></li>
                      <li><a href="#log" data-ajax="false">Log</a></li>
                     </ul>
                  </div>
                  <div id="status"><p id="myspan" name="myspan" ></p></div>
                  <div id="log"><p id="logSection" name="logSection"></p></div>
                </div>                  
                                
              <!-- if the page header does not work out, then we can use the buttons
              <p><a href="#two" data-role="button" data-icon="gear">Configure Device</a></p>
                -->
                
            </div> <!-- end dcalc div -->        
     
            </form>
         </div>
      </div> <!-- page 1 -->

        <!-- Start of second page: #two -->
        <div data-role="page" id="two" data-theme="a">
        
        <div class="ui-field-contain">
            <label name="lblSelectedDevice" id="lblSelectedDevice">XXXXXXX</label>
        </div>


        <div data-role="header"  data-theme="b" data-position="fixed">
        	<a href="#Home" data-icon="delete" id="cancelConfig">Cancel</a>
        	<h1>&nbsp;</h1>
        	<a href="#Home" data-icon="check" onclick="doSaveConfig()">Save</a>
        </div> <!-- /header -->       


        	<div role="main" class="ui-content">
            <form method = "post" action="#">

                <!-- System Mode -->
                <div class="containing-element">
                 <div class="ui-field-contain">
                	<label for="cbDeviceMode">Device Mode</label>
                	<select name="cbDeviceMode" id="cbDeviceMode" data-role="slider" required>
                		<option value="0">Manual</option>
                		<option value="1">Auto</option>
                	</select>
                </div>
                </div>
                
       
<div data-role="popup" id="popupConfigRequiredFlds" class="ui-content" style="max-width:280px" data-dismissible="false">
    <a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-left">Close</a>
<p>Please enter a value for ALL fields.</p>
</div>
       
                
                <!-- Default Fan Speed -->
                <div class="ui-field-contain">
                    <fieldset data-role="controlgroup" data-type="horizontal">
                    	<legend>Default Fan Speed</legend>
                         	<input type="radio" name="rbDefaultFanSpeed" id="rbDefaultFanSpeed1" value="84" />
                         	<label for="rbDefaultFanSpeed1">Low</label>
                
                         	<input type="radio" name="rbDefaultFanSpeed" id="rbDefaultFanSpeed2" value="169"  />
                         	<label for="rbDefaultFanSpeed2">Medium</label>
                
                         	<input type="radio" name="rbDefaultFanSpeed" id="rbDefaultFanSpeed3" value="255" />
                         	<label for="rbDefaultFanSpeed3">High</label>
                    </fieldset>
                </div>

                <!-- Weather Stations -->
                <!-- full list can be found here: https://www.nws.noaa.gov/mdl/synop/stadrg.php -->
                <div class="ui-field-contain">
                   <label for = "selWeatherSta">Weather Stations (AZ)</label>
                   <select name = "selWeatherSta" id = "selWeatherSta"  class="selWeatherSta"  required>
            		<option>Select a weather station...</option>
                    <option value="KCGZ">Casa Grande - KCGZ</option>
                    <option value="KCHD">Chandler - KCHD</option>
                    <option value="KDMA">Davis-Monthan AFB - KDMA</option>
                    <option value="KDUG">Douglas - KDUG</option>
                    <option value="KDVT">Deer Vly/Phoenix - KDVT</option>
                    <option value="KFHU">FT Huachuca - KFHU</option>
                    <option value="KFLG">FLAGSTAFF - KFLG</option>
                    <option value="KGBN">Gila Bend - KGBN</option>
                    <option value="KGCN">Grand Canyon - KGCN</option>
                    <option value="KGEU">Glendale Muni AP - KGEU</option>
                    <option value="KGYR">Goodyear - KGYR</option>
                    <option value="KIFP">Bullhead City - KIFP</option>
                    <option value="KIGM">Kingman - KIGM</option>
                    <option value="KINW">Winslow - KINW</option>
                    <option value="KIWA">Chandler - KIWA</option>
                    <option value="KLUF">Luke AFB - KLUF</option>
                    <option value="KNYL">Yuma MCAS - KNYL</option>
                    <option value="KOLS">Nogales Internatnl - KOLS</option>
                    <option value="KPGA">Page - KPGA</option>
                    <option value="KPHX">Phoenix - KPHX</option>
                    <option value="KPRC">Prescott - KPRC</option>
                    <option value="KRQE">Window Rock- KRQE</option>
                    <option value="KSAD">Safford - KSAD</option>
                    <option value="KSDL">Scottsdale - KSDL</option>
                    <option value="KSJN">St. Johns Air Park - KSJN</option>
                    <option value="KSOW">Show Low - KSOW</option>
                    <option value="KTUS">Tucson - KTUS</option>
                    </select>
                </div>


                <!-- Zip Code -->
               <label for = "txtZipcode">Zip Code</label>
                  <input type = "text" name = "txtZipcode" id = "txtZipcode" 
                     placeholder = "90210" required  minlength="5" maxlength="10">


                <!-- Refresh Rate, in minutes -->
                <div class="ui-field-contain">
                   <label for = "selRefreshRate">Weather Stations (AZ)</label>
                   <select name = "selRefreshRate" id = "selRefreshRate"  class="selRefreshRate"  required>
            		<option>Select Number of Minutes Between API Calls...</option>
                    <option value="5">5 Minutes</option>
                    <option value="10">10 Minutes</option>
                    <option value="15">15 Minutes</option>
                    <option value="20">20 Minutes</option>
                    <option value="25">25 Minutes</option>
                    <option value="30">30 Minutes</option>
                    <option value="45">45 Minutes</option>
                    <option value="60">60 Minutes</option>
                    <option value="90">90 Minutes</option>
                    <option value="120">120 Minutes</option>
                    <option value="180">180 Minutes</option>
                    <option value="240">240 Minutes</option>
                    </select>
                </div>


                <!-- Local Timezone Offset -->
                <div class="ui-field-contain">
                   <label for = "selTimeZoneOffset">Time Zone</label>
                   <select name = "selTimeZoneOffset" id = "selTimeZoneOffset"  class="selTimeZoneOffset"  required>
            		<option>Select Your Timezone</option>
                    <option value="-4">Eastern Daylight Time - New York</option>
                    <option value="-5">Central Daylight Time - Chicago</option>
                    <option value="-6">Mountain Daylight Time - Salt Lake City</option>
                    <option value="-7">Mountain Standard Time - Phoenix</option>
                    <option value="-7">Pacific Daylight Time - Los Angeles</option>
                    <option value="-8">Alaska Daylight Time - Anchorage</option>
                    <option value="-10">Hawaii Standard Time - Honolulu</option>
                    </select>
                </div>


                <!-- Observe DST -->
                <div class="containing-element">
                 <div class="ui-field-contain">
                	<label for="cbObserveDST">Observe DST</label>
                	<select name="cbObserveDST" id="cbObserveDST" data-role="slider" required>
                		<option value="0">No</option>
                		<option value="1">Yes</option>
                	</select>
                </div>
                </div>
 

                <!-- Number of Installed NexDoor Fans -->
                <div class="ui-field-contain">
                    <label for="spinNumFans">Number of NexDoor Fans</label>
                    <input type="number" data-role="spinbox" name="spinNumFans" id="spinNumFans" value="1" min="1" max="10" required />
                </div>

                <!-- Sq. Footage of Location -->
                <div class="ui-field-contain">
                    <label for="spinSqFeet">Square Footage</label>
                    <input type="number" data-role="spinbox" name="spinSqFeet" id="spinSqFeet" value="1500" min="500" max="10000" required />
                </div>


                <!-- Debug Mode -->
                <div class="containing-element">
                 <div class="ui-field-contain">
                	<label for="cbDebugMode">Debug Mode</label>
                	<select name="cbDebugMode" id="cbDebugMode" data-role="slider" required>
                		<option value="false">Off</option>
                		<option value="true">On</option>
                	</select>
                </div>
                </div>

                
              <!-- if the page header does not work out, then we can use the buttons
             <p><a href="#Home" data-role="button" data-icon="check">Save</a></p>
             <p><a href="#Home" data-role="button" data-icon="delete">Cancel</a></p>
            -->

            </form>
            
        	</div><!-- /content -->
        
        	<div data-role="footer">
        		<h4>NexDoor</h4>
        	</div><!-- /footer -->
        </div><!-- /page two -->      






        <script>
        
        var particle = new Particle();
        var accessToken = '';
        var DeviceId = '';
        var DeviceName = '';

/////////////////////////////////
        

        
//  $(document).on('pagecreate', function() 
  $(document).on('pageinit', function() 
    {
        
          // when form first loads, disable all inputs until user has selected a device, and that device is online.
         if ( $("#selDevice")[0].selectedIndex == 0)
         {
             $("#dcalc").hide();
         }
        
    });
        
/////////////////////////////////
        
        function callParticle_Func(command, args)
          {
           
        	$("body").css("cursor", "progress");
        
        
            document.getElementById("myspan").innerHTML="Waiting... ("+command+"/"+args+")";
            document.getElementById("logSection").innerHTML=getFormattedDateTime()+' Requesting: '+command+'/'+args+'<br />'+document.getElementById("logSection").innerHTML;
           
           var fnPr = particle.callFunction({ deviceId: DeviceId, name: command, argument: args, auth: accessToken });
        
           fnPr.then(
             function(data) 
               {
          	     document.getElementById("myspan").innerHTML="done: <br />Device: "+DeviceName+"\n/"+command+"/"+args+"<p><pre>"+JSON.stringify(data.body, null, "   ")+"</p></pre>";
        
        	     document.getElementById("logSection").innerHTML=getFormattedDateTime()+' Request Success-> ['+DeviceName+'] '+command+'/'+args+'<br />'+document.getElementById("logSection").innerHTML;
              }, 
            function(err) 
              {
                document.getElementById("myspan").innerHTML="ERROR !<br />Message: "+err; 
        	    document.getElementById("logSection").innerHTML=getFormattedDateTime()+' failed<br />'+document.getElementById("logSection").innerHTML;        
              }).finally(function(info){ $("body").css("cursor", "default");
            });   
           
        }
        
        
/////////////////////////////////
        
    // toggle baffle open/closed
    // closing the baffle will turn off the fan if it is on
    $('#cb2').on('change', function() {
      //alert( this.value );
      callParticle_Func("go",this.value);

        // if baffel is closed, then update the fan status slider to reflect off
      if (this.value == 'c')
      {
          //  refresh the status slideer for the fan.. keep it in sync
          $(cb1).prop("checked", false);
          $('#cb1').val('0');
          $('#cb1').slider( "refresh" ); 
          
      }
    })
        
/////////////////////////////////
        
    // toggle fan on/off    
    // baffle is opened and closed with fan on/off
    $('#cb1').on('change', function() {
      //alert( this.value );
     callParticle_Func("fan",this.value);

        // if the fan is turned on, then update baffle slider to reflect open
      if (this.value == '1')
      {
          //  refresh the status slideer for the fan.. keep it in sync
          $(cb2).prop("checked", true);
          $('#cb2').val('o');
          $('#cb2').slider( "refresh" ); 
          
      }
    
        // if the fan is turned off, then update baffle slider to reflect closed
      if (this.value == '0')
      {
          //  refresh the status slideer for the fan.. keep it in sync
          $(cb2).prop("checked", false);
          $('#cb2').val('c');
          $('#cb2').slider( "refresh" ); 
          
      }

    })
/////////////////////////////////

    // set fan speed
    $("input[name='rbFanSpeed']" ).on('click', function() {
      callParticle_Func("fanSpeed",this.value);
    })
        



    // Cancel Configuration
    $("#cancelConfig").on('click', function(){
    // need to reset origianl values to all inputs on config page 
    
     // Post config values to cloud
     callParticle_Func("GetCurrentConfigs","0");

     
    });
    
    



    //  login
    $("#btnLogin").on('click', function(){
       // particle.login({username: 'NDParticleDev@gmail.com', password: 'p8rtic1ei0'}).then(
 
        particle.login({username: $("#txt-email").val(), password: $("#txt-password").val()}).then(
          function(data) {
            accessToken = data.body.access_token;
            ListDevices(accessToken)
          },
          function (err) {
            event.preventDefault();
            $("#dlg-invalid-credentials" ).popup( "open" );
          }
        );    
     
    });
    

// list devices
function ListDevices(accessToken)
{
        var devicesPr = particle.listDevices({ auth: accessToken });
        
        devicesPr.then(
          function(devices){
            PopulateDeviceSelectList(devices);
            $.mobile.changePage( "#Home", { transition: "slideup", changeHash: false });
          },
          function(err) {
            console.log('List devices call failed: ', err);
          }
        );    
}


// add devices to device selection box
function PopulateDeviceSelectList(devices)
{

    var NumDevices = Object.keys(devices.body).length;
    
    var deviceList = "";
  
    // empty select list so we can add current devices
    $('#selDevice').find('option').remove();  
    let newOption = new Option("Select a device...", "")
    $('#selDevice').append(newOption);

    // add active devices to the list
    for (i=0; i<NumDevices; i++)
      {
          if (devices.body[i].online === true)
          {
               let newOption = new Option(devices.body[i].name, devices.body[i].id);
              $('#selDevice').append(newOption);
          }
      }

    // need to refresh Jquery Mobile UI      
    $('selDevice').selectmenu('refresh');
}


    // save Configuration Data
    function doSaveConfig()
    {
       
       var squareFeetBuildingSize = parseInt($("#spinSqFeet").val(), 10); 
        var numberOfNexDoorFans = parseInt($("#spinNumFans").val(), 10);
        var CallWebhookEveryMinutes = parseInt($("#selRefreshRate").val(), 10);
        var localTimeZoneOffset = parseInt($("#selTimeZoneOffset").val(), 10);
        var observeDST = parseInt($("#cbObserveDST").val(), 10);
        var WeatherStation = $("#selWeatherSta").val();
        var zipcode = $("#txtZipcode").val();
        var debugMode = $("#cbDebugMode").val();
        var DefaultFanSpeed = parseInt($("input[name='rbDefaultFanSpeed']:checked").val(), 10);
        var SystemMode = parseInt($("#cbDeviceMode").val(), 10);


        
        var configObj = { squareFeetBuildingSize: squareFeetBuildingSize, 
        				numberOfNexDoorFans: numberOfNexDoorFans, 
                        CallWebhookEveryMinutes: CallWebhookEveryMinutes,
                        localTimeZoneOffset: localTimeZoneOffset,
                        observeDST: observeDST,
                        WeatherStation: WeatherStation,
                        zipcode: zipcode,
                        debugMode: debugMode,
                        DefaultFanSpeed: DefaultFanSpeed,
                        SystemMode: SystemMode
                        };
        var myJSON = JSON.stringify(configObj);

    // need to chack for requiered fields here.. if any are blank, then 
    //  event.preventDefault();
      // else continue on

        if (isNaN(configObj.squareFeetBuildingSize) ||
            isNaN(configObj.numberOfNexDoorFans) ||
            isNaN(configObj.CallWebhookEveryMinutes) ||
            isNaN(configObj.localTimeZoneOffset) ||
            configObj.WeatherStation === "Select a weather station..." ||
            configObj.zipcode === "" ||
            isNaN(configObj.DefaultFanSpeed))
            {
                event.preventDefault();
                $("#popupConfigRequiredFlds" ).popup( "open" );
            }
        else
        {
       
             // Post config values to cloud
             callParticle_Func("SaveConfigs",myJSON);
             
             // the device will send an event that will indicate success or failure...
             // When we recive the event, all form elemetns will be either updated to match current values
            // so on failure, the form elements will be reset to actual values on device.
            
        }

   };

         
        
        
        
        
        // Check Device Availability
        function isDeviceAvailable(obj)
        {
        
          DeviceName = obj.options[obj.selectedIndex].text;
          DeviceId = obj.value;
          
          
          $("#lblSelectedDevice").html(DeviceName);
          
          if (obj.selectedIndex === 0)
          {
            DeviceName = "No Device Selected" 
            //$("#dcalc").disabled = 
            $("#dcalc *").prop('disabled',true);
        	$("#dcalc").hide();

            $("#DeviceStatus").html(DeviceName);
            $("#DeviceStatus").css({ 'color': 'black', 'font-size': '100%' });
          } 
          else if (obj.selectedIndex > 0)
          {
            $("#dcalc *").prop('disabled',false);
        	$("#dcalc").show();
            $("#DeviceStatus").html("Device Ready");
            $("#DeviceStatus").css({ 'color': 'green', 'font-size': '100%' });
          }
          /*
          // if device is not online, or error occurs, disavble rest of form.
          else if (DeviceName != "No Device Selected")
          {
            $("#dcalc *").prop('disabled',true);
        	$("#dcalc").hide();
           //$('#cb1').button('disable');	
            $("#DeviceStatus").html("Device Offline");
            $("#DeviceStatus").css({ 'color': 'red', 'font-size': '150%' });
        }
          */
        
        
        
          
        
            
        
        }
        
        function getFormattedDateTime() 
          {
        
        	var d = new Date;
        
        	return '['+d.getFullYear()+'-'+ 
            			(d.getMonth() < 10 ? '0' : '') + d.getMonth()+'-'+
                        (d.getDate() < 10 ? '0' : '') + d.getDate()+' '+
                        (d.getHours() < 10 ? '0' : '')+d.getHours()+':'+
                        (d.getMinutes() < 10 ? '0' : '')+d.getMinutes()+':'+
                        (d.getSeconds() < 10 ? '0' : '')+d.getSeconds()+']';
        
             
          }
        
 
        /*
        
        particle.getEventStream({ deviceId: DeviceId, name: "device-config", auth: accessToken}).then(function(stream) {
          stream.on('event', function(feed) {
            // insert code to do something with feed.data
            $("#DeviceStatus").html("Device Config: " + feed.data);
            //window.alert("Message from Device: "+feed.data);
          });
        });
        
  */




        
        </script>
      
   </body>
</html>