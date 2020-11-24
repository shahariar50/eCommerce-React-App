import styled from 'styled-components';

export const LoginContainer = styled.div`

// Break Point 
$tablet-width		: 767px;
$mobile-width		: 640px;

// Tablet 
@mixin tablet {
	@media screen and (max-width: #{$tablet-width}) {
		@content;
	}
}

// Mobile
@mixin mobile {
	@media screen and (max-width: #{$mobile-width}) {
		@content;
	}
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
}

body, html {
  width: 100%;
  height: 100%;
  background-color: #e8e8ea;
  
}
  

.wrap {
  width: 440px;
  padding: 2%;
  margin: 60px auto;
  background: #fff;
  box-shadow: 0 20px 30px -20px rgba(2, 2, 2, 0.8), 0 20px 30px 0px rgba(30, 30, 30, 0.3);
  
  @include tablet {
    width: 380px;
  }
  
  @include mobile {
    width: 320px;
  }
  
}
  
.form {
  width: 100%;
  margin: 0 auto;
  padding: 60px 30px;
  box-sizing: border-box;
  background: #3360ae;
  background: -moz-linear-gradient(-45deg, #3360ae 0%, #17a2b8 100%);
  background: -webkit-linear-gradient(-45deg, #3360ae 0%,#17a2b8 100%);
  background: linear-gradient(135deg, #3360ae 0%,#17a2b8 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3360ae', endColorstr='#17a2b8',GradientType=1 );
  
  
  .form-list {
    position: relative;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    width: 100%;
    height: 60px;
    margin-top: 12px;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid transparent;
    
    &:first-child {
      margin-top: 0;
    }
    @include tablet {
      height: 50px;
    }
    @include mobile {
      height: 40px;
    }
    
    .form-label {
      display: block;
      z-index: 1;
      position: relative;
      height: 100%;
      margin-right: 0;
      padding-left: 26px;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      line-height: 62px;
      @include tablet {
        padding-left: 22px;
        font-size: 13px;
        line-height: 50px;
      }
      
      @include mobile {
        padding-left: 18px;
        font-size: 11px;
        line-height: 39px;
      }
    }
    
    .form-input {
      z-index: 1;
      display: inline-block;
      position: relative;
      overflow: hidden;
      -ms-flex-positive: 1;
      -webkit-flex-grow: 1;
      flex-grow: 1;
      height: 58px;
      padding: 0 20px;
      font-size: 16px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.85);
      border: 0;
      outline: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: transparent;
      
      @include tablet {
        padding: 0 14px;
        height: 47px;
        font-size: 14px;
      }
      
      @include mobile {
        padding: 0 10px;
        height: 36px;
        font-size: 11px;
      }
      
      &:-webkit-autofill {
          -webkit-box-shadow: inset 0 0 0px 9999px transparent;
      }

      &:focus,
      &:-webkit-autofill:focus {
          -webkit-box-shadow: inset 0 0 0px 9999px transparent, 0 0 8px rgba(0, 0, 0, 0); 
      }
      
      &:focus + .form-background {
        transition: background-color .2s;
        background-color: rgba(255,255,255,0.35);
        
      }
      
      &::-webkit-input-placeholder {
          color: rgba(255,255,255,0.4);
          font-size: 14px;
        
          @include tablet {
            font-size: 12px;
          }
          @include mobile {
            font-size: 10px;
          }
        
      }
      &:-ms-input-placeholder {
          color: rgba(255,255,255,0.4);
          font-size: 14px;
        
          @include tablet {
            font-size: 12px;
          }
          @include mobile {
            font-size: 10px;
          }
      }
      &::-moz-placeholder {
          color: rgba(255,255,255,0.4);
          font-size: 14px;
        
          @include tablet {
            font-size: 12px;
          }
          @include mobile {
            font-size: 10px;
          }
      }
    }
    
    .form-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255,255,255,0.18);
      transition: background-color .2s;
      border-radius: 30px;
    }
  }
  
  .form-button {
    display: block;
    cursor: pointer;
    width: 100%;
    margin: 50px auto 0;
    padding: 20px 0;
    font-size: 14px;
    color: #fff;
    line-height: 0.8; //20px*0.8=16px
    background-color: transparent;
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 30px;
    transition: background-color .2s;
    
    &:hover,
    &:active,
    &:focus {
      color: #333;
      background-color: rgba(255,255,255,0.8);
      outline: 0;
      transition: background-color .2s, color .2s;
    }
    
      @include tablet {
        font-size: 16px;
        padding: 16px 0;
      }
      @include mobile {
        font-size: 13px;
        padding: 13px 0;
      }
  }
}
    
`;