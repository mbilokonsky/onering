# What Is This?
ONE RING is designed to expose a single access point on a single port for all mode servers running on a given developer's machine. WEBAPP, FLAMINGO and ANGULAR are each currently served separately on their own ports. ONE RING reverse proxies them and adds SSL. The ONE RING endpoint can then be attached to ngrok or any other outward facing service to allow external users to access the build running locally on a given developer's machine.

## Moving Parts
This is a relatively straightforward architecture; we install `nginx` on the developer's machine, add a configuration file designed to surface mode's services, and provide a way to start and stop it.

ONE RING ships with the ability to mock the proxied services. That is to say, it can run a mock-webapp, a mock-flamingo and a mock-angular that simply return static strings to indicate where they're being served from. This lets us test and deploy ONE RING in isolation, not necessarily coupling it to Mode's specific running services. Useful for ensuring the proxy works as intended, or for situations where the requisite underlying services are for whatever reason unavailable.