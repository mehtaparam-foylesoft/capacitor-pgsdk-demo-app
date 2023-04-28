package io.ionic.starter;

import android.os.Bundle;

import com.cashfree.capacitor.CFBridge;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    registerPlugin(CFBridge.class);
    super.onCreate(savedInstanceState);
  }
}
