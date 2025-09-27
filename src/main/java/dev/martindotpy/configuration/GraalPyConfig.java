package dev.martindotpy.configuration;

import java.nio.file.Path;
import java.util.Optional;

import io.smallrye.config.ConfigMapping;

@ConfigMapping(prefix = "graalpy")
public interface GraalPyConfig {
    Optional<Path> externalDirectory();

    Optional<Path> vfsPath();
}
