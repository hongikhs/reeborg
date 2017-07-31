QUnit.module("API module", {
  beforeEach: function() {
    test_utils.reset();
    test_utils.set_human_language("fr");
  }
});

QUnit.test("background_test_en", function(assert) {
    var world_url = "/src/worlds/tutorial_en/alone.json";
    var done = assert.async();
    test_utils.set_human_language("en");
    assert.ok(test_utils.eval_python(world_url,
        "/tests/integration_tests/programs/background_test_en.py").success,
        "background_test_en run successfully.");
    done();
});
QUnit.test("background_test_fr", function(assert) {
    var world_url = "/src/worlds/tutorial_en/alone.json";
    var done = assert.async();
    test_utils.set_human_language("fr");
    assert.ok(test_utils.eval_python(world_url,
        "/tests/integration_tests/programs/background_test_fr.py").success,
        "background_test_fr run successfully.");
    done();
});

QUnit.test("bridge_test_en", function(assert) {
    var world_url = "/src/worlds/tutorial_en/alone.json";
    var done = assert.async();
    test_utils.set_human_language("en");
    assert.ok(test_utils.eval_python(world_url,
        "/tests/integration_tests/programs/bridge_test_en.py").success,
        "bridge_test_en run successfully.");
    done();
});
QUnit.test("bridge_test_fr", function(assert) {
    var world_url = "/src/worlds/tutorial_en/alone.json";
    var done = assert.async();
    test_utils.set_human_language("fr");
    assert.ok(test_utils.eval_python(world_url,
        "/tests/integration_tests/programs/bridge_test_fr.py").success,
        "bridge_test_fr run successfully.");
    done();
});

QUnit.test("decorative_object_test_en", function(assert) {
    var world_url = "/src/worlds/tutorial_en/alone.json";
    var done = assert.async();
    test_utils.set_human_language("en");
    assert.ok(test_utils.eval_python(world_url,
        "/tests/integration_tests/programs/decorative_object_test_en.py").success,
        "decorative_object_test_en run successfully.");
    done();
});
QUnit.test("decorative_object_test_fr", function(assert) {
    var world_url = "/src/worlds/tutorial_en/alone.json";
    var done = assert.async();
    test_utils.set_human_language("fr");
    assert.ok(test_utils.eval_python(world_url,
        "/tests/integration_tests/programs/decorative_object_test_fr.py").success,
        "decorative_object_fr run successfully.");
    done();
});
QUnit.test("obstacle_test_en", function(assert) {
    var world_url = "/src/worlds/tutorial_en/alone.json";
    var done = assert.async();
    test_utils.set_human_language("en");
    assert.ok(test_utils.eval_python(world_url,
        "/tests/integration_tests/programs/obstacle_test_en.py").success,
        "obstacle_test_en run successfully.");
    done();
});

QUnit.test("obstacle_test_fr", function(assert) {
    var world_url = "/src/worlds/tutorial_en/alone.json";
    var done = assert.async();
    test_utils.set_human_language("fr");
    assert.ok(test_utils.eval_python(world_url,
        "/tests/integration_tests/programs/obstacle_test_fr.py").success,
        "obstacle_test_fr run successfully.");
    done();
});