Feature: User profile management

  @case1
  # Registration and Login
  Scenario: Registration and Login validation
    Given Complete formal registration
    When Process profile login
    Then Validate response for login

  @case2
  # Registration -> Login -> Logout
  Scenario: Registration Login Logout validation
    Given Complete formal registration
    When Complete formal login
    When Process profile logout
    Then Validate response for logout

  @case3
  # Registration -> Login -> Get-Profile -> Logout
  Scenario: Registration Login Get-Profile Logout validation
    Given Complete formal registration
    When Complete formal login
    When Process get profile
    Then Validate response for get profile
    Then Complete formal logout

  @case4
  # Registration -> Login -> Forget-Password -> Logout
  Scenario: Registration Login Forget-Password Logout validation
    Given Complete formal registration
    When Complete formal login
    When Process forget password
    Then Validate response for forget password
    Then Complete formal logout

  @case5
  # Registration -> Login -> Change-Password -> Logout
  Scenario: Registration Login Change-Password Logout validation
    Given Complete formal registration
    When Complete formal login
    When Process change password
    Then Validate response for change password
    Then Complete formal logout

  @case6
  # Registration -> Login -> Delete-Account
  Scenario: Registration Login Delete-Account validation
    Given Complete formal registration
    When Complete formal login
    When Process delete account
    Then Validate response for delete account
    Then Validate response for invalid login

  @case7
  # Fail on purpose
  Scenario: Login without registration
    When Complete formal login
