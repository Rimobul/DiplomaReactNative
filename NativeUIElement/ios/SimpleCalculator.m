//
//  SimpleCalculator.m
//  NativeUIElement
//
//  Created by ostrava on 3/8/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#include <stdlib.h>
#import "SimpleCalculator.h"

@implementation SimpleCalculator

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(random:(RCTResponseSenderBlock)callback)
{
  // Change this depending on what you want to retrieve:
  int r = arc4random_uniform(100);
  NSArray *a = @[@(r)];
  
  callback(@[a]);
}

@end
