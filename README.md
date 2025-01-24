# dp-900

---
LLVM
https://i.imgur.com/VNeaQlD.png
https://i.imgur.com/wxRHvlB.png

---
msbuild.exe
https://i.imgur.com/Z2zOyoR.png
https://i.imgur.com/5rgR71W.png
https://i.imgur.com/OXqARBv.png
https://i.imgur.com/SpiJSXl.png
https://i.imgur.com/QJy0suT.png
https://i.imgur.com/4C0nGoI.png
https://i.imgur.com/f2DDNdT.png
https://i.imgur.com/poinq9l.png
https://i.imgur.com/pLddzf3.png
https://i.imgur.com/vgITiFp.png
https://i.imgur.com/xLeTFuq.png
https://i.imgur.com/nyujDzD.png
https://i.imgur.com/HoLm95W.png
https://i.imgur.com/uveKXpX.png
https://i.imgur.com/uveKXpX.png
https://i.imgur.com/aZ6XIoZ.png
https://i.imgur.com/fJvb8o3.png
https://i.imgur.com/0FWomDT.png
https://i.imgur.com/3xJQeA4.png
https://i.imgur.com/ojLM9TD.png


---

https://i.imgur.com/aAi6jyy.png
https://i.imgur.com/8oknZQZ.png
https://i.imgur.com/madDztP.png
https://i.imgur.com/fbOECOG.png
https://i.imgur.com/yeS53fX.png
https://i.imgur.com/PdOv25E.png
https://i.imgur.com/a4i9r29.png
https://i.imgur.com/ApiaAZ0.png
https://i.imgur.com/GvlkDVk.png

https://i.imgur.com/twf200G.png 
maven vs gradle which is better ?


@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem
@rem SPDX-License-Identifier: Apache-2.0
@rem
 
@if "%DEBUG%"=="" @echo off
@rem ##########################################################################
@rem
@rem  Gradle startup script for Windows
@rem
@rem ##########################################################################
 
@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal
 
set DIRNAME=%~dp0
if "%DIRNAME%"=="" set DIRNAME=.
@rem This is normally unused
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%..
 
@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi
 
@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m" "-javaagent:%APP_HOME%/lib/agents/gradle-instrumentation-agent-8.12.jar"
 
@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome
 
set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if %ERRORLEVEL% equ 0 goto execute
 
echo. 1>&2
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH. 1>&2
echo. 1>&2
echo Please set the JAVA_HOME variable in your environment to match the 1>&2
echo location of your Java installation. 1>&2
 
goto fail
 
:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe
 
if exist "%JAVA_EXE%" goto execute
 
echo. 1>&2
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME% 1>&2
echo. 1>&2
echo Please set the JAVA_HOME variable in your environment to match the 1>&2
echo location of your Java installation. 1>&2
 
goto fail
 
:execute
@rem Setup the command line
 
set CLASSPATH=%APP_HOME%\lib\gradle-gradle-cli-main-8.12.jar
 
 
@rem Execute Gradle
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" org.gradle.launcher.GradleMain %*
 
:end
@rem End local scope for the variables with windows NT shell
if %ERRORLEVEL% equ 0 goto mainEnd
 
:fail
rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
set EXIT_CODE=%ERRORLEVEL%
if %EXIT_CODE% equ 0 set EXIT_CODE=1
if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%
exit /b %EXIT_CODE%
 
:mainEnd
if "%OS%"=="Windows_NT" endlocal
 
:omega
