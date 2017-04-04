package com.nativeuielement.nativemodules;

import android.app.Activity;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReactMethod;

import java.util.Random;

public class SimpleCalculator extends ReactContextBaseJavaModule {
    public SimpleCalculator(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SimpleCalculator";
    }

    @ReactMethod
    public void random(Callback successCallback) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            return;
        }

        Random r = new Random();
        int result = r.nextInt(100);

        successCallback.invoke(result);
    }
}