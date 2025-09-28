package dev.martindotpy.sentimentanalysis.configuration;

import io.smallrye.config.ConfigMapping;

/**
 * Configuration interface for GraalPy settings.
 * Maps properties with the prefix "graalpy" to this interface.
 */
@ConfigMapping(prefix = "graalpy")
public interface GraalPyConfig {
    String vfsPath();
}
