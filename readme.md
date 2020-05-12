# What Is This?
ONE RING is designed to expose a single access point on a single port for all mode servers running on a given developer's machine. WEBAPP, FLAMINGO and ANGULAR are each currently served separately on their own ports. ONE RING reverse proxies them and adds SSL. The ONE RING endpoint can then be attached to ngrok or any other outward facing service to allow external users to access the build running locally on a given developer's machine.

## Moving Parts
This is a relatively straightforward architecture; we install `nginx` on the developer's machine, add a configuration file designed to surface mode's services, and provide a way to start and stop it.

ONE RING ships with the ability to mock the proxied services. That is to say, it can run a mock-webapp, a mock-flamingo and a mock-angular that simply return static strings to indicate where they're being served from. This lets us test and deploy ONE RING in isolation, not necessarily coupling it to Mode's specific running services. Useful for ensuring the proxy works as intended, or for situations where the requisite underlying services are for whatever reason unavailable.

## Instructions
1. run `npm run initialize_nginx`. Feel free to take a look at `scripts/install.sh` to see what this does, it's really simple and naive. It'll just install nginx from homebrew with the default configuration, then it'll copy over our custom mode proxy server into the `servers/` folder. Finally, it'll start `nginx` which will serve our proxy endpoints at `http://localhost:9000`. (if you already have nginx installed you'll want to run `brew services restart nginx`. )
2. Once your install is complete, you can run `npm run mock` and it'll set up incredibly basic http servers on ports 3000, 3001 and 3002 to demonstrate that this works. Go ahead and run that to spin up the mocks.
3. Now, in your browser you can navigate to `http://localhost:9000/webapp`, `http://localhost:9000/angular` and `http://localhost:9000/flamingo` and you should see data coming back from the respective mocks.
4. If something is amiss, run `brew services` and make sure that `nginx` is green. If not, please let me know and send me a copy of your output from `/usr/local/var/log/nginx`

## Next Steps / Open Questions

1. We should enable SSL here. I've got it commented out pending a cert, but that's a good next step - this enables us to keep everything on http locally, but only expose https externally.
2. Will this generally work for our routing? Internally to our tooling not much should change, since they're all referring to each other directly via HOST:PORT anyway. This is just exposing a new access point. Right?
3. Does this expose any new security risks etc?
4. How do we expose this localhost:9000 more publicly? ngrok? does devops have a process for this?