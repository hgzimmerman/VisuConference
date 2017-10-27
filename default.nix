with import <nixpkgs> {};
stdenv.mkDerivation rec {
  name = "VisuConference";
  env = buildEnv { name = name; paths = buildInputs; };
  buildInputs = [

  ];
  shellHook = ''

    function release {
      cd www
      npm run build
      cd ..
      cargo build --release
    }

    function start_prod {
        cd www
        npm run build
        cd ..
        ROCKET_ENV=production cargo run --release
    }

    function start_dev {
        cd www
        npm run build
        cd ..
        cargo run
    }

  '';
}